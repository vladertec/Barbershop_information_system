import axios from "axios"

export const getVisit = async () => {
    try {
      const {data} = await axios.get(`api/visit`)
      return data
    } catch (err) {
      return err
    }
  }
  