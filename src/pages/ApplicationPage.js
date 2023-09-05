import React, { useState, useEffect } from 'react';
import {useNavigate} from 'react-router-dom'
import axios from 'axios';
import Select from "../components/Select";

function ApplicationPage() {
  const [universities, setUniversities] = useState([]);
  const [courses, setCourses] = useState([]);
  const [selectedUniversity, setSelectedUniversity] = useState('')
  const [selectedCourse, setSelectedCourse] = useState('')

  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:8080/universities')
      .then((response) => {
        setUniversities(response.data);
      })
      .catch((error) => {
        alert(error);
      });
  }, []);

  useEffect(() => {
    if (selectedUniversity) {
      axios.get(`http://localhost:8080/courses/university/${selectedUniversity}`, {
        headers: {
          'Content-Type': 'course/json',
          'Access-Control-Allow-Origin': '*',
          token: localStorage.getItem('authToken')
        },
      })
      .then((response) => {
        setCourses(response.data); 
      })
      .catch((error) => {
        alert(error);
      });
    }
  }, [selectedUniversity])

  const handleSave = async () => {
    try {
      if (!selectedUniversity || !selectedCourse) {
        return alert('Please select a university and a degree program')
      }
      await axios.post('http://localhost:8080/applications', {
        universityId: selectedUniversity,
        courseId: selectedCourse
      }, {
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          token: localStorage.getItem('authToken')
        },
      });
      alert('Application added successfully!');
      navigate('/applications')
    } catch (error) {
      alert(error.response.data);
    }
  };

  const handleCancel = () => {
    navigate('/')
  };

  return (
    <div className="page-container">
      <div className="d-flex flex-column border px-5 pb-4 pt-5" style={{ borderRadius: '20px', width: '30%' }}>
      <h2 className="text-center mb-3">New Application</h2>
      <Select id="university" label="University" placeholder="Select a University" value={selectedUniversity} setValue={setSelectedUniversity} options={universities} />
      <Select id="course" label="Course" placeholder="Select a course" value={selectedCourse} setValue={setSelectedCourse} options={courses} />
      <button onClick={handleSave} className="btn btn-primary flex-fill mb-1 mt-3">Send application</button>
      <button onClick={handleCancel} className="btn btn-light flex-fill">Cancel</button>
    </div>
    </div>
  );
}

export default ApplicationPage;
