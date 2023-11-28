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
      <Col xs={9}>
        <div>
          {workouts && workouts.map((workout) => (
            <WorkoutDetails key={workout._id} workout={workout}/>
          ) )}
        </div>
      </Col>
      <Col xs={3}>
            <WorkoutsForm />
      </Col>
    </Row>
      
   </Container>
   </>
  )
}
