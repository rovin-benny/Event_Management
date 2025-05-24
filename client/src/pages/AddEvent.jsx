import { useContext, useState } from 'react';
import axios from 'axios';
import { UserContext } from '../UserContext';
import { useNavigate } from 'react-router-dom'; // ← Import useNavigate

export default function AddEvent() {
  const { user } = useContext(UserContext);
  const navigate = useNavigate(); // ← Initialize navigate function

  const [formData, setFormData] = useState({
    owner: user ? user.name : "",
    title: "",
    optional: "",
    description: "",
    organizedBy: "",
    eventDate: "",
    eventTime: "",
    location: "",
    ticketPrice: 0,
    image: null,
    likes: 0
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setFormData((prevState) => ({ ...prevState, [name]: files[0] }));
    } else {
      setFormData((prevState) => ({ ...prevState, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = new FormData();
    for (const key in formData) {
      data.append(key, formData[key]);
    }

    axios
      .post("/createEvent", data, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
      .then((response) => {
        console.log("Event posted successfully:", response.data);
        navigate("/"); // ← Redirect to home on success
      })
      .catch((error) => {
        console.error("Error posting event:", error.response?.data || error.message);
      });
  };

  return (
    <div className='flex flex-col ml-20 mt-10'>
      <div><h1 className='font-bold text-[36px] mb-5'>Post an Event</h1></div>

      <form onSubmit={handleSubmit} className='flex flex-co'>
        <div className='flex flex-col gap-5'>
          <label className='flex flex-col'>
            Title:
            <input
              type="text"
              name="title"
              className='rounded mt-2 pl-5 px-4 ring-sky-700 ring-2 h-8 border-none'
              value={formData.title}
              onChange={handleChange}
            />
          </label>

          <label className='flex flex-col'>
            Optional:
            <input
              type="text"
              name="optional"
              className='rounded mt-2 pl-5 px-4 ring-sky-700 ring-2 h-8 border-none'
              value={formData.optional}
              onChange={handleChange}
            />
          </label>

          <label className='flex flex-col'>
            Description:
            <textarea
              name="description"
              className='rounded mt-2 pl-5 px-4 py-2 ring-sky-700 ring-2 h-20 border-none'
              value={formData.description}
              onChange={handleChange}
            />
          </label>

          <label className='flex flex-col'>
            Organized By:
            <input
              type="text"
              name="organizedBy"
              className='rounded mt-2 pl-5 px-4 ring-sky-700 ring-2 h-8 border-none'
              value={formData.organizedBy}
              onChange={handleChange}
            />
          </label>

          <label className='flex flex-col'>
            Event Date:
            <input
              type="date"
              name="eventDate"
              className='rounded mt-2 pl-5 px-4 ring-sky-700 ring-2 h-8 border-none'
              value={formData.eventDate}
              onChange={handleChange}
            />
          </label>

          <label className='flex flex-col'>
            Event Time:
            <input
              type="time"
              name="eventTime"
              className='rounded mt-2 pl-5 px-4 ring-sky-700 ring-2 h-8 border-none'
              value={formData.eventTime}
              onChange={handleChange}
            />
          </label>

          <label className='flex flex-col'>
            Location:
            <input
              type="text"
              name="location"
              className='rounded mt-2 pl-5 px-4 ring-sky-700 ring-2 h-8 border-none'
              value={formData.location}
              onChange={handleChange}
            />
          </label>

          <label className='flex flex-col'>
            Ticket Price:
            <input
              type="number"
              name="ticketPrice"
              className='rounded mt-2 pl-5 px-4 ring-sky-700 ring-2 h-8 border-none'
              value={formData.ticketPrice}
              onChange={handleChange}
            />
          </label>

          <label className='flex flex-col'>
            Image:
            <input
              type="file"
              name="image"
              className='rounded mt-2 pl-5 px-4 py-2 ring-sky-700 ring-2 border-none'
              onChange={handleChange}
              accept="image/*"
            />
          </label>

          <button className='primary mt-4' type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}
