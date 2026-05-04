import { chromium , type FullConfig } from "@playwright/test";
import path from 'path'
import fs from "fs"


export default async function  globalSetup(config:FullConfig) {

    if(process.env.RUNNER?.toUpperCase()==='LOCAL')

        {
console.log("Detecting the local run");
            
    //Delete allure Results
    const resultDir = path.resolve(process.cwd(),"allure-results");
    console.log(`>>path   ${resultDir} `)

     if(fs.existsSync(resultDir))
     {
        fs.rmSync(resultDir,{recursive:true,force:true})
     }

        }

        else
        {
            console.log("Detected the global run")
        }


    
}