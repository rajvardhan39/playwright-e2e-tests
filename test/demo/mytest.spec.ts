   import{test,expect,TestInfo} from '@playwright/test'



   test("should load something",async({page})=>{
      await page.goto("https://unsplash.com/")

      await expect(page).toHaveTitle("Beautiful Free Images & Pictures | Unsplash")

      //await expect(page.locator("//h3")).toHaveText("Trending this week");
   })


   
   test("show demo devices",async({page},testInfo)=>{
    // console.log(`>>config at run-time :${JSON.stringify(testInfo.config)}`)

      //await expect(page.locator("//h3")).toHaveText("Trending this week");
   })

   

   test("should demo run in parallel run 1",{tag:'@demo'},async({page})=>{
      await page.goto("https://www.google.com");
   })

     test("should demo run in parallel run 2",{tag:'@demo'},async({page})=>{
      await page.goto("https://www.google.com");
   })