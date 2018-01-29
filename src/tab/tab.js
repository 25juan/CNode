import React,{
    Component
} from "react" ;
import Share from "../screen/Share" ;
import Ask from "../screen/Ask" ;
import Job from "../screen/Job";
import Mine from "../screen/Mine" ;
const router = [
    {
        router:"Share",
        component:Share,
        label:"分享",
        icon:"ios-share-outline"
    },{
        router:"Ask",
        component:Ask,
        icon:"ios-help-circle-outline",
        label:"提问"
    },{
        router:"Job",
        component:Job,
        icon:"ios-notifications-outline",
        label:"招聘"
    },{
        router:"Mine",
        component:Mine,
        icon:"ios-contact-outline",
        label:"我的"
    }
];
export default router;