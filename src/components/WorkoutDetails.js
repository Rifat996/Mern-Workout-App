import React from 'react'
import { Card } from 'react-bootstrap'
import { useWorkoutsContext } from '../hooks/useWorkoutsContext';
import formatDistanceToNow from 'date-fns/formatDistanceToNow'



const WorkoutDetails = ({ workout }) => {
  const { dispatch } = useWorkoutsContext()


  const handleClick = async () => {
    const response  = await fetch ('/api/workouts/' + workout._id, {
      method: 'DELETE'
    })
    const json = await response.json()

    if (response.ok) {
      dispatch({type: 'DELETE_WORKOUT', payload: json})
    }
  }




  return (
    <Card className='mt-5 p-3 bg-light' style={{ boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)', border: "none", margin: '0 auto' }}>
      <Card.Title>
        <h4 style={{ color: '#33b864' }}>{workout.title}</h4>
      </Card.Title>
      <p><strong>Load (kg:) </strong>{workout.load}</p>
      <p><strong>Reps (kg:) </strong>{workout.reps}</p>
      <p>{formatDistanceToNow(new Date(workout.createdAt), {addSuffix: true})}</p>
      <span className='material-symbols-outlined' style={{ position: 'absolute', bottom: '10px', right: '10px', backgroundColor: '#ccc', borderRadius: '50%', padding: '5px', cursor: 'pointer' }} onClick={handleClick}>Delete</span>
    </Card>
  )
}

export default WorkoutDetails
