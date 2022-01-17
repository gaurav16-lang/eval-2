import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useSelector } from 'react-redux'
import {
  getShowError,
  getshowLoading,
  getShowSuccess,
} from '../Redux/Show/action'
const JobDashboard = () => {
  const dispatch = useDispatch()
  const { loading, data } = useSelector((store) => store.shows.shows)

  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    dispatch(getshowLoading())
    try {
      const { data } = await axios.get('http://localhost:3001/shows')
      dispatch(getShowSuccess(data))
    } catch (err) {
      dispatch(getShowError(err))
    }
  }

  return loading ? (
    <h2>Loading....</h2>
  ) : (
    <div>
      <h1>JOB Dashboard</h1>
      {data.map((e) => {
        ;<div key={e.id}>
          <h2 style={{ color: 'red' }}>e.name</h2>
          <img src="{e.url}" alt="img" />
          <Link to={`/show/${e.id}`}>
            <button
              style={{
                display: 'block',
                margin: 'auto',
                width: '300px',
                background: 'green',
                cursor: 'pointer',
                border: 'none',
                height: '30px',
                color: 'white',
              }}
            >
              view
            </button>
          </Link>
          <hr />
        </div>
      })}
    </div>
  )
}

export default JobDashboard
