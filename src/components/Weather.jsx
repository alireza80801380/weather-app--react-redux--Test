import { useEffect, useState } from "react"
import PersianDate from "./PersianDate"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import {sendrequest, sendrequest2 } from "../Redux/ActionWeather"




const WeatherApp = ()=>{

    const {loading , data , error} = useSelector(state => state )
    const dispatch = useDispatch()

    const [backMode , setbackmode] = useState('cold')
    const [city , setcity] = useState('')
    const [Rang1 , setRang1] = useState(null)
    const [Rang2, setRang2] = useState(null)

    const handelgetweather = (e)=>{
        e.preventDefault()
        dispatch(sendrequest(city))
    
    }
    const handelgetweather2 = (e)=>{
        e.preventDefault()
        dispatch(sendrequest2(Rang1 , Rang2))
    
    }


    useEffect(()=>{
        if(!data.main){
            return
        }
        let temp = data.main.temp -273
        if(temp < 10){
            setbackmode('cold')
        }else if(temp < 30){
            setbackmode('usual')
        }else if(temp > 30){
            setbackmode('warm')
        }
    },[data])


    return(
        <div className={`app pt-4 container-fluid back_${backMode}`}>

            <div className='row justify-content-center py-3 pt-4'>
                <div className='col-10 col-md-6 col-lg-4 col-xl-3'>
                    <form onSubmit={handelgetweather}>
                        <input type="text" 
                        className='search_input w-100 text_color placeholder_color' 
                        placeholder={'نام شهر یا کشور'}
                        value={city}
                        onChange={(e)=>setcity(e.target.value)}
                        />
                    </form>
                    <form onSubmit={handelgetweather2}>
                        <input type="text" 
                        className='search_input w-100 text_color placeholder_color' 
                        placeholder={'مختصات اول'}
                        value={Rang1}
                        onChange={(e)=>setRang1(e.target.value)}
                        />
                    </form>
                    <form onSubmit={handelgetweather2}>
                        <input type="text" 
                        className='search_input w-100 text_color placeholder_color' 
                        placeholder={'مختصات دوم'}
                        value={Rang2}
                        onChange={(e)=>setRang2(e.target.value)}
                        />
                    </form>
                </div>
            </div>

            <div className='row justify-content-center py-3 pt-4'>
                <div className='col-11 col-md-8 col-lg-4 col-xl-3'>
                    <h3 className='text-center text_color'>
                        <PersianDate/>
                    </h3>
                </div>
            </div>
        {loading ? (
            <div className="text-center text-secondary mt-5">
            <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
        ) : data.main ? (
            <>
            <div className='row justify-content-center py-3'>
                <div className='col-9 col-md-6 col-lg-4 col-xl-3'>
                    <div className='temprature_box pt-3'>
                        <span>{Math.round(data.main.temp -273)}</span> °C
                    </div>
                </div>
            </div>
            <div className='row justify-content-center py-3 pt-4'>
                <div className='col-11 col-md-8 col-lg-4 col-xl-3'>
                    <h1 className='text-center fa-3x lathin_text text_color'>{data.weather[0].main}</h1>
                </div>
            </div>
            <div className='row justify-content-center py-3 pt-4'>
                <div className='col-11 col-md-8 col-lg-4 col-xl-3'>
                    <h1 className='text-center fa-3x lathin_text text_color'>{data.name}</h1>
                </div>
            </div>
            </>
        ): error ?(
            <h3 className="text-center text_color">
                نام شهر را به درستی وارد کنید
            </h3>
        ):(
            <h3 className="text-center text_color">
                مکان مورد نظر را جستو جو کنید
            </h3>
        )}




        </div>
    )
}


export default WeatherApp