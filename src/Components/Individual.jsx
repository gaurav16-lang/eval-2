import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { getTTFB } from 'web-vitals'

const Individual = () => {
  const { id } = useParams()
  const [change, setChange] = useState(0)
  const [user, setUSer] = useState([])
  useEffect(() => {
    gett()
  }, [id, change])
  const gett = async () => {
    const { data } = await axios.get(`http;//localhost:3001/shows/${id}`)
    setUSer([data])
  }
  return <div></div>
}

export default Individual
