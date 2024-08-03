import React, { useState, useEffect, useRef } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './TeacherDashboard.css';

const TeacherDashboard = () => {
  const [activeSection, setActiveSection] = useState(null);
  const [formData, setFormData] = useState({
    id: null,
    courseName: '',
    language: '',
    subject: '',
    platform: '',
    time: '',
    fees: '',
    aboutCourse: '',
  });
  const [courses, setCourses] = useState([]);

  const formRef = useRef(null);
  const progressRef = useRef(null);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/get-course');
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setCourses(data);
      } catch (error) {
        console.error('Error fetching courses:', error);
      }
    };

    fetchCourses();
  }, []);

  useEffect(() => {
    if (activeSection === 'addCourse' || activeSection === 'editCourse') {
      if (formRef.current) {
        formRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (activeSection === 'viewProgress') {
      if (progressRef.current) {
        progressRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [activeSection]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const method = formData.id ? 'PUT' : 'POST';
      const url = formData.id
        ? `http://localhost:5000/api/update-course/${formData.id}`
        : 'http://localhost:5000/api/add-course';

      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const message = formData.id ? 'Course updated successfully!' : 'Course added successfully!';
      toast.success(message);

      const updatedCoursesResponse = await fetch('http://localhost:5000/api/get-course');
      if (updatedCoursesResponse.ok) {
        const updatedCourses = await updatedCoursesResponse.json();
        setCourses(updatedCourses);
      } else {
        console.error('Failed to fetch updated courses:', updatedCoursesResponse.statusText);
      }

      setFormData({
        id: null,
        courseName: '',
        language: '',
        subject: '',
        platform: '',
        time: '',
        fees: '',
        aboutCourse: '',
      });
      setActiveSection(null);
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('Error submitting form');
    }
  };

  const handleEdit = (course) => {
    setFormData({
      id: course._id,
      courseName: course.courseName,
      language: course.language,
      subject: course.subject,
      platform: course.platform,
      time: course.time,
      fees: course.fees,
      aboutCourse: course.aboutCourse,
    });
    setActiveSection('editCourse');
  };

  const handleDelete = async (courseId) => {
    if (window.confirm('Are you sure you want to delete this course?')) {
      try {
        const response = await fetch(`http://localhost:5000/api/delete-course/${courseId}`, {
          method: 'DELETE',
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        toast.success('Course deleted successfully!');
        const updatedCoursesResponse = await fetch('http://localhost:5000/api/get-course');
        if (updatedCoursesResponse.ok) {
          const updatedCourses = await updatedCoursesResponse.json();
          setCourses(updatedCourses);
        } else {
          console.error('Failed to fetch updated courses:', updatedCoursesResponse.statusText);
        }
      } catch (error) {
        console.error('Error deleting course:', error);
        toast.error('Error deleting course');
      }
    }
  };

  const handleAddCourse = () => {
    setFormData({
      id: null,
      courseName: '',
      language: '',
      subject: '',
      platform: '',
      time: '',
      fees: '',
      aboutCourse: '',
    });
    setActiveSection('addCourse');
  };

  const handleViewProgress = () => {
    setActiveSection('viewProgress');
  };

  return (
    <div className="teacher-dashboard">
      <ToastContainer />
      <header className="dashboard-header">
        <h1>Teacher Dashboard</h1>
        <p>Welcome, Teacher!</p>
      </header>

      <section className="dashboard-summary">
        <div className="summary-item">
          <h2>Upcoming Classes</h2>
          <ul>
            <li>Spanish - Beginners | 12:00 PM</li>
            <li>French - Intermediate | 2:00 PM</li>
            <li>German - Advanced | 4:00 PM</li>
          </ul>
        </div>
        <div className="summary-item">
          <h2>Recent Feedback</h2>
          <p>"Great explanation of complex grammar concepts!" - Student A</p>
          <p>"I appreciate the extra practice exercises provided." - Student B</p>
        </div>
        <div className="summary-item">
          <h2>Upcoming Events</h2>
          <p>Teacher Workshop on New Language Trends - July 25, 2024</p>
          <p>Monthly Language Exchange Meet - August 5, 2024</p>
        </div>
      </section>

      <section className="dashboard-courses">
        <div className="summary-item">
          <h2>My Courses</h2>
          {courses.length === 0 ? (
            <p>No courses found</p>
          ) : (
            <ul>
              {courses.map((course) => (
                <li key={course._id}>
                  <p><strong>Course Name:</strong> {course.courseName}</p>
                  <p><strong>Language:</strong> {course.language}</p>
                  <p><strong>Subject:</strong> {course.subject}</p>
                  <p><strong>Platform:</strong> {course.platform}</p>
                  <p><strong>Time:</strong> {course.time}</p>
                  <p><strong>Fees:</strong> {course.fees}</p>
                  <p><strong>About the Course:</strong> {course.aboutCourse}</p>
                  <button className="edit-button" onClick={() => handleEdit(course)}>Edit</button>
                  <button className="delete-button" onClick={() => handleDelete(course._id)}>Delete</button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>

      <section className="dashboard-actions">
        <button className="action-button" onClick={handleAddCourse}>Add New Course</button>
        <button className="action-button" onClick={handleViewProgress}>View Student Progress</button>
      </section>

      {(activeSection === 'addCourse' || activeSection === 'editCourse') && (
        <div className="form-container" ref={formRef}>
          <h2>{activeSection === 'editCourse' ? 'Update Course' : 'Add New Course'}</h2>
          <form onSubmit={handleSubmit}>
            <label>
              Course Name:
              <input type="text" name="courseName" value={formData.courseName} onChange={handleChange} required />
            </label>
            <label>
              Language:
              <input type="text" name="language" value={formData.language} onChange={handleChange} required />
            </label>
            <label>
              Subject:
              <input type="text" name="subject" value={formData.subject} onChange={handleChange} required />
            </label>
            <label>
              Platform:
              <input type="text" name="platform" value={formData.platform} onChange={handleChange} required />
            </label>
            <label>
              Time:
              <input type="text" name="time" value={formData.time} onChange={handleChange} required />
            </label>
            <label>
              Fees:
              <input type="text" name="fees" value={formData.fees} onChange={handleChange} required />
            </label>
            <label>
              About the Course:
              <textarea name="aboutCourse" value={formData.aboutCourse} onChange={handleChange} required />
            </label>
            <button className="submit-button" type="submit">{activeSection === 'editCourse' ? 'Update' : 'Add'}</button>
          </form>
        </div>
      )}

      {activeSection === 'viewProgress' && (
        <div className="progress-container" ref={progressRef}>
          <h2>Student Progress</h2>
          <p>Progress details go here...</p>
        </div>
      )}
    </div>
  );
};

export default TeacherDashboard;
