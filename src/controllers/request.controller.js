import axios from "axios";
import dotenv from "dotenv"
dotenv.config()

export default class RequestController {
  static async getRandomAdvice(req, res) { 
    try {
      const response = await axios.get(process.env.API_URL);
      const advice = response.data.slip.advice;
      return res.status(200).json({
        status: 'success',
        advice: advice
      });
    } catch (error) {
      console.error('Error:', error);
      return res.status(500).json({
        status: 'failed',
        message: 'Failed to fetch random advice'
      });
    }
  }
}
