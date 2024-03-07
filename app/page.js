"use client"
import React, {useState, useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import MainForm from "./components/MainForm";
import LoadingMainForm from './components/LoadingMainForm';
import { fetchQuestions } from './assets/petitions/fetchQuestions';
import { fetchStatesData } from './assets/petitions/fetchStatesData';
import { fetchTweet } from './assets/petitions/fetchTweet';
import { fetchTYM } from './assets/petitions/fetchTYM';
import { fetchMainContent } from './assets/petitions/fetchMainContent';
import { fetchAllLeads } from './assets/petitions/fetchLeads';
import { fetchConfig } from './assets/petitions/fetchConfig';
import AusMap from './components/map/AusMap';
import { Open_Sans } from 'next/font/google';
//require('dotenv').config()
const open_sans = Open_Sans(
  {
      subsets:['latin'],
      weight: ['400', '600', '700', '800'],
      variable: '--font-open-sans'
  }
) 
function Home() {
  const [configurations , setConfigurations]= useState({
    lenguage: "es",
    SearchBy:"state",
    sendMany: false,
    hasQuestions: false,
    region: "mx"
  })
  const [emailData, setEmailData] = useState({
    userName: ''
  })
  const [dataUser, setDataUser] = useState({

      })
      const [backendURLBase] = useState(`${process.env.NEXT_PUBLIC_URL}`)
      const [backendURLBaseServices] = useState(`${process.env.NEXT_PUBLIC_URL_SERVICES}`)
      const [clientId] = useState(`${process.env.NEXT_PUBLIC_CLIENT_ID}`)
      const [endpoints] = useState({
        toGetConfs:'/confs/',
        toGetRepresentativesPerStates:'/demo-test-state/',
        toGetRepresentativesPerParty:'/representatives-party/',
        toGetAllRepresentatives:'/all-senators/',
        toGetRepresentativesByCp:'/find-mp-demo/',
        toGetQuestions:'/questions/',
        toGetMainData:'/main/',
        toGetThankYouMessage:'/typ-message/',
        toGetTweets:'/tweets/',
        toSaveLeads:'/leads/',
        toSendEmails:'/email-builder/',
        toGetAllLeads:'/leads/',
        toSendEmailBatch:'/email-batch/',
        
      })
    const [mp, setMp] = useState([])
    const [senator, setSenator] = useState([])
    const [states, setStates] = useState('')
    const [tweet, setTweet] = useState('')
    const [dataQuestions,setDataQuestions] = useState()
    const [questions, setQuestions] = useState({
      question1: 'Hello, \n I am writing to express my concern over payroll taxes on GPs, which threaten their operation and our healthcare quality. These taxes add financial strain, potentially leading to longer wait times and reduced access for the public.\n Please consider the negative impact of these taxes on healthcare availability and support opposing them. Your action can help maintain a robust healthcare system for our community.'.replace(/\n\r?/g, "<br/>"),
    })
    const [user,setUser] = useState('')
    const [mainData, setMainData] = useState({
      mainImg:'./assets/laptop-with-notebook-and-glasses-on-table.jpg',
      title:'Please enter a title on your board',
      subtitle:'Please enter a subtitle on your dashboard',
      instruction:'Please enter an instruction paragraph in your dashboard',
      firstFormLabel1:'Please enter an indication on your dashboard',
      firstFormPlaceholder1:'Please enter a state selection placeholder in your dashboard',
      firstFormLabel2:'Please enter an indication on your dashboard',
      firstFormPlaceholder2:'Please enter a placeholder text for your status selection input on your dashboard',
      termsAndConditionsTxt:'Please enter a text of terms and conditions in your dashboard',
      termsAndConditionsURL:'#',
      findBtnText: 'Find your representative',
      note:'Please enter a note text in your dashboard',
      positionName:'Please enter a position name in your dashboard',
      emailFormUserLabel:'Please enter this value in your dashboard',
      emailFormInfoRepLabel:'Please enter this value in your dashboard',
      emailFormSubjectPlaceholder:'Please enter this value in your dashboard',
      emailFormUserNameLabel:'Please enter this value in your dashboard',
      emailFormUserNamePlaceholder:'Please enter this value in your dashboard',
    })
    const [typData, setTypData] = useState({
      thankYouMessage:'Please enter a thank you message on the dashboard',
      secondThankYouMessage : 'Please enter fill this field in the dashboard',
      repeatButtonTyp : 'Please fill in this field on the dashboard',
    })
    const [loading, setLoading] = useState(true)
    const [allDataIn, setAllDataIn] = useState([])
    const [showFindForm, setShowFindForm] = useState(false);
    const [showMap,setShowMap] = useState(false)
    const [showModal, setShowModal] = useState(false);
    const [ modalText, setModalText] = useState({
      title: "Attention ",
      message: "",
      button: "close"
    })
    const [hideMain, setHideMain]= useState(true)

    
   // const adanCID ='636dadcf2626f92aade6664a'
    useEffect(() => {

        async function fetchData() {
          await Promise.all([
            fetchConfig('GET', backendURLBase, endpoints.toGetConfs, clientId, setConfigurations),
            fetchMainContent('GET', backendURLBase, endpoints.toGetMainData, clientId, '', setMainData),
            //fetchEmailData('GET', backendURLBase, endpoints.toGetQuestions, clientId, "", setDataUser),
            //fetchStatesData('GET', backendURLBase, endpoints.toGetAllRepresentatives, clientId, '', setStates),
            fetchTweet('GET', backendURLBase, endpoints.toGetTweets, clientId, '', setTweet),
            fetchQuestions('GET', backendURLBase, endpoints.toGetQuestions, clientId, '', setDataQuestions),
            fetchTYM('GET', backendURLBase, endpoints.toGetThankYouMessage, clientId, '', setTypData)
          ]).then(() => {
            setLoading(false) // cambia el estado a "false" cuando todas las consultas se hayan completado
          }).catch((error) => console.error(error))
        }
        fetchData()
    },[])
    


    return(
      <div className='app-container'>
        {/* <LoadingMainForm/> */}
      {
        loading && <LoadingMainForm/>
      }
      {
        !loading && (
          <div className='background-general'>
            <AusMap
              mainData={mainData}
              setMainData={setMainData}
              setModalText={setModalText}
              setHideMain={setHideMain}
              modalText={modalText}
              showMap={showMap}
              setShowMap={setShowMap}
              states={states}
              setStates={setStates}
              showModal={showModal}
              setShowModal={setShowModal}
            />
          
          <MainForm
              hideMain={hideMain}
              setHideMain={setHideMain}
              showFindForm={showFindForm}
              setShowFindForm={setShowFindForm}
              configurations={configurations}
              setEmailData={setEmailData}
              emailData={emailData}
              dataUser={dataUser}
              setDataUser={setDataUser}
              mp={mp}
              setMp={setMp}
              senator={senator}
              setSenator={setSenator}
              clientId={clientId}
              states={states}
              endpoints={endpoints}
              tweet={tweet}
              typData={typData}
              mainData={mainData}
              backendURLBase={backendURLBase}
              backendURLBaseServices={backendURLBaseServices}
              dataQuestions={dataQuestions}
              setDataQuestions={setDataQuestions}
              questions={questions}
              setQuestions={setQuestions}
              allDataIn={allDataIn}
              setAllDataIn={setAllDataIn}
          />
          
          </div>

        )
      }
      <footer>
          <div className='footer-content-container'>
              <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_163_281)">
                <path d="M9 18.5C4.03749 18.5 0 14.4625 0 9.5C0 4.53749 4.03749 0.5 9 0.5C13.9625 0.5 18 4.53749 18 9.5C18 14.4625 13.9625 18.5 9 18.5ZM9 1.62501C4.65765 1.62501 1.12501 5.15765 1.12501 9.5C1.12501 13.8424 4.65765 17.375 9 17.375C13.3424 17.375 16.875 13.8424 16.875 9.5C16.875 5.15765 13.3424 1.62501 9 1.62501Z" fill="black"/>
                <path d="M9.00002 14C6.51876 14 4.5 11.9813 4.5 9.50002C4.5 7.01872 6.51872 5 9.00002 5C10.22 5 11.3615 5.48011 12.2152 6.35187L11.411 7.13847C10.7711 6.48477 9.91522 6.12496 9.00002 6.12496C7.13893 6.12496 5.62501 7.63889 5.62501 9.49998C5.62501 11.3611 7.13893 12.875 9.00002 12.875C9.91465 12.875 10.7705 12.5152 11.411 11.8615L12.2141 12.6492C11.361 13.5205 10.2195 14 9.00002 14Z" fill="black"/>
                </g>
                <defs>
                <clipPath id="clip0_163_281">
                <rect width="18" height="18" fill="white" transform="translate(0 0.5)"/>
                </clipPath>
                </defs> 
              </svg>
              <span className={`${open_sans.className} footer-text`}>COPYRIGHT 2024. STOP SWAMPING GPS</span>
          </div>
      </footer>
      </div>
    )

}

export default Home
