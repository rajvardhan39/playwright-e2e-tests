   import{test,expect} from '@playwright/test'


   test("should load something",async({page})=>{
      await page.goto("https://unsplash.com/")

      await expect(page).toHaveTitle("Beautiful Free Images & Pictures | Unsplash")

      //await expect(page.locator("//h3")).toHaveText("Trending this week");
   })