import {Component} from 'react'

import Header from '../Header'
import './index.css'

const settings = {
  dots: true,
  slidesToShow: 1,
  slidesToScroll: 1,
}

class Home extends Component {
  render() {
    return (
      <div className="home-container">
        <Header />
        <div className="top-container">
          <div>
            <p>WORLDS LARGEST APP FOR HINDU DEVOTEES</p>
            <p>
              Pray Daily with <span>Sri Mandir.</span> <br /> One App for all
              your devotional <br /> needs.
            </p>
          </div>
          <img
            src="https://res.cloudinary.com/dmmpu2exc/image/upload/v1721401515/img_hero_artwork_en_ls69ck.webp"
            width="450px"
            height="450px"
          />
        </div>
        <h1 className="text-center">Puja seva for you and your loved ones </h1>
        <p>
          Book Pujas in your and your familys name at 1000+ renowned temples in
          India. You will also receive a video of the Puja and Prasad along with
          divine blessings
        </p>
        <ul className="puja-sevas-list">
          <li className="puja-sevas-list-item">
            <img
              src="https://res.cloudinary.com/dmmpu2exc/image/upload/v1721408931/1720883338524_spgycu.webp"
              className="puja-sevas"
            />
            <h1>
              Shani Saade Saati Peeda shanti Mahapuja and Til Tel abhishek
            </h1>
            <p>For prevention of Misfortunes and Adversities</p>
            <p>Shree Shanidev Temple Shani shingapur maharashtra</p>
            <p>20 july Saturday Ashadha Shukla Chathurdhashi</p>
            <button>PARTICIPATE</button>
          </li>
          <li className="puja-sevas-list-item">
            <img
              src="https://res.cloudinary.com/dmmpu2exc/image/upload/v1721408561/1721208690418_1_nibmic.webp"
              className="puja-sevas"
            />
            <h1>Maa Bagalamuki Mantra Tukta Havan</h1>
            <p>For victory in court cases and victory over enemies </p>
            <p>Maa Bagalamuki temple ,Haridwar Uttarakhand </p>
            <p>21st july, sunday Ashadha Shukla Chathurdhashi</p>
            <button>PARTICIPATE</button>
          </li>
          <li>
            <img
              src="https://res.cloudinary.com/dmmpu2exc/image/upload/v1721408763/1720890969814_ird11a.webp"
              className="puja-sevas"
            />
            <h1>Divya Mahankali Thanthrokta Havan</h1>
            <p>For Courage and Protection from Obstacles</p>
            <p>Shakthipeeth maa Tarapith Temple ,BirBhum,west bengal</p>
            <p>20 july Saturday Ashadha Shukla Purnima</p>
            <button>PARTICIPATE</button>
          </li>
        </ul>
        <h1>Complete Panchang</h1>
        <p>
          Sri Mandir Panchang offers you all the important information about
          Tithi, Auspicious-Inauspicious timings, and upcoming fasts and
          festivals.
        </p>
        <p>View Detailed Panchang</p>
        <ul className="view-detailed-panchag-list">
          <li className="view-detailed-panchag-list-item">
            <h1>Auspicious -Inauspicious Timing</h1>
            <p>Checkout Auspicious and Inauspicious Timings for your city</p>
          </li>
          <li className="view-detailed-panchag-list-item">
            <h1>Rahukal and Gulik kaal</h1>
            <p>Checkout raahukal and gulikaal for your city</p>
          </li>
          <li className="view-detailed-panchag-list-item">
            <h1>Sunrise and Sunset</h1>
            <p>Know the sunrise and sunset timings for your city</p>
          </li>
          <li className="view-detailed-panchag-list-item">
            <h1>Upcoming City</h1>
            <p>
              Checkout the upcoming festivals their puja puja vidhi and vrat
              kadha{' '}
            </p>
          </li>
        </ul>
      </div>
    )
  }
}

export default Home
