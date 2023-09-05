import React, {useState, useEffect, useCallback} from 'react';
import {useNavigate} from 'react-router-dom'
import axios from 'axios';
import {Collapse} from 'react-collapse';

const Application = ({ application, onDelete }) => {
  const [toggleApplicationInfo, setToggleApplicationInfo] = useState(false);

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:8080/applications/${application.id}`)
      alert('Application deleted successfully!')
      if (onDelete) {
        onDelete()
      }
    } catch (err) {
      alert(err)
    }
  };

  return <div
    className="d-flex border shadow-sm my-2 mx-5"
    style={{ borderRadius: '5px' }}>
    <div className="flex-fill border-bottom" style={{ cursor: 'pointer' }}>
      <div
        className="d-flex justify-content-between align-items-center py-4 px-5">
        <div className="flex-fill" onClick={() => setToggleApplicationInfo((prev) => !prev)}>
          <div className="d-flex align-items-center">
            <h6 className="ml-1 mb-0">{application?.course?.university?.name} </h6>
          </div>
          <span className="text-secondary">Degree program: {application?.course?.name}</span>
        </div>
        <div className="badge bg-secondary text-light mx-3">{application?.applicationStatus}</div>
        <div className="mx-1">
          <button onClick={() => setToggleApplicationInfo((prev) => !prev)} className="btn btn-outline-info">View
          </button>
        </div>
        <div className="mx-1">
          <button onClick={handleDelete} className="btn btn-outline-danger">Delete</button>
        </div>
      </div>
      <Collapse isOpened={toggleApplicationInfo}>
        <div className="px-5 pb-3 d-flex">
          <div className="flex-fill mx-2 border p-4" style={{ borderRadius: '5px'}}>
            <h6>Application Details</h6>
            <div className="d-flex justify-content-between align-items-center">
              <span>Application number</span>
              <span>{application?.applicationNumber}</span>
            </div>
            <div className="d-flex justify-content-between align-items-center mb-1">
              <span>Date</span>
              <span>{application?.applicationDate}</span>
            </div>
            <div className="d-flex justify-content-between align-items-center mb-1">
              <span>Status</span>
              <span className="badge bg-secondary text-light">{application?.applicationStatus}</span>
            </div>
          </div>
          <div className="flex-fill mx-2 border p-4" style={{ borderRadius: '5px'}}>
            <h6>Degree Program Details</h6>
            <div className="d-flex justify-content-between align-items-center">
              <span>Degree Program</span>
              <span>{application?.course?.name}</span>
            </div>
            <div className="d-flex justify-content-between align-items-center">
              <span>University</span>
              <span>{application?.course?.university?.name}</span>
            </div>
            <div className="d-flex justify-content-between align-items-center">
              <span>Location</span>
              <span>{application?.course?.university?.location}</span>
            </div>
          </div>
          <div className="flex-fill mx-2 border p-4" style={{ borderRadius: '5px'}}>
          <h6>Your Details</h6>
            <div className="d-flex justify-content-between align-items-center">
              <span>Name</span>
              <span>{application?.applyingStudent?.name}</span>
            </div>
            <div className="d-flex justify-content-between align-items-center">
              <span>Surname</span>
              <span>{application?.applyingStudent?.surname}</span>
            </div>
          </div>
        </div>
      </Collapse>
    </div>
  </div>
}

function MyApplicationsPage() {
  const [applications, setApplications] = useState([])
  
  const navigate = useNavigate()

  const getApplications = useCallback(async () => {
    try {
      const response = await axios.get('http://localhost:8080/applications/student', {
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          token: localStorage.getItem('authToken')
        },
      })
      setApplications(response.data);
    } catch(error) {
      alert(error);
    }
  }, [])

  useEffect(() => {
    getApplications()
  }, [getApplications]);

  return (
    <div className="">
      <h5 className="mx-5 mb-2">My Applications</h5>
      {applications.length === 0 ?
        <div className="d-flex flex-column align-items-center border p-5 mx-5" style={{ borderRadius: '20px'}}> 
        There are no applications yet. 
        <button className="btn btn-primary mt-3" onClick={() => navigate("/new-application")}>Send Application</button>
        </div> :
        applications.map((application) => {
          return (
            <div key={application.id}>
              <Application application={application} onDelete={getApplications}/>
            </div>
          )
        })
      }
    </div>
  );
}

export default MyApplicationsPage;
