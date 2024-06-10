
const PRODUCTION = "https://wellfare-krfsydw70-thejasdevadigas-projects.vercel.app/api"
const DEVELOPMENT = "https://localhost:8000/api"
const BASEURL = DEVELOPMENT
const APIStandards =  {

    USER: {
        GET_EVENTS_DATA : `${BASEURL}get/event`,
        GET_REGION_DATA: `${BASEURL}get/link`,
        SET_MEMBER_DATA: `${BASEURL}set/member`,
    },
    ADMIN : {
        LOGIN  : `${BASEURL}/login/`,
        SET_EVENTS_DATA : `${BASEURL}set/event`,
        SET_REGION_DATA: `${BASEURL}set/region`,        
        GET_MEMBER_DATA: `${BASEURL}get/member`,
        DELETE_EVENT_DATA:`${BASEURL}delete/event`,
        DELETE_MEMBER_DATA:`${BASEURL}delete/member`,
    },
}  


export default APIStandards