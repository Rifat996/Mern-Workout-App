import React, { useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import WorkoutDetails from '../components/WorkoutDetails';
import WorkoutsForm from '../components/WorkoutsForm';
import { useWorkoutsContext } from '../hooks/useWorkoutsContext';

export default function Home() {
  const {workouts, dispatch} = useWorkoutsContext()

useEffect(() => {
  const fetchWorkouts = async () => {
    const response = await fetch('/api/workouts')
    const json = await response.json()

    if (response.ok) {
      dispatch({type: 'SET_WORKOUTS', payload: json})
    }
  }

  fetchWorkouts()
}, [  dispatch])



  return (
   <>
   <Container>
    <Row>
      <Col>
        <div>
          {workouts && workouts.map((workout) => (
            <WorkoutDetails key={workout._id} workout={workout}/>
          ) )}
        </div>
      </Col>
    </Row>
    <Row>
      <Col>
            <WorkoutsForm />
      </Col>
    </Row>
   </Container>
   </>
  )
}
