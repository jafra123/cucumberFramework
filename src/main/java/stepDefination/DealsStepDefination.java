/*
package stepDefination;

import java.util.List;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;

import cucumber.api.DataTable;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

import cucumber.api.java.en.When;

public class DealsStepDefination {
	
WebDriver driver;
	
	@Given("^User is already on login page$")
	public void User_already_on_login_page() {
		System.setProperty("webdriver.chrome.driver" , "C:/QA/Drivers/chromedriver.exe");
		driver = new ChromeDriver();
		driver.get("https://classic.crmpro.com/index.html");
		
	}	
	
	@When("^title of login page is Free CRM$")
	public void title_login_page_is_Free_CRM () {
		String title =driver.getTitle();		
	//	Assert.assertEquals("CRMPRO  - CRM software for customer relationship management, sales, and support.", title);
	
		
	}
	
	@Then("^user enters username and password$")
	public void user_enters_username_and_password(DataTable crediatials) {
	    // Write code here that turns the phrase above into concrete actions
	    // For automatic transformation, change DataTable to one of
	    // List<YourType>, List<List<E>>, List<Map<K,V>> or Map<K,V>.
		List<List<String>> data = crediatials.raw();
	    // E,K,V must be a scalar (String, Integer, Date, enum etc)
		driver.findElement(By.name("username")).sendKeys(data.get(0).get(0));
		 driver.findElement(By.name("password")).sendKeys(data.get(0).get(1));
		
	}
	@Then("^user clicks on login button$")
	public void user_clicks_on_login_button() throws Throwable {
		WebElement loginbtn =driver.findElement(By.xpath("//input[@value='Login' and @type='submit']"));
	JavascriptExecutor js = (JavascriptExecutor)driver;
	js.executeScript("arguments[0].click();" , loginbtn);
		
		
	}

	@Then("^user is on home page$")
	public void user_is_on_home_page() throws Throwable {
	   String title1 = driver.getTitle();
	  System.out.println("title is=== "+ title1);
	   Assert.assertEquals("CRMPRO", title1);		
		
		
	}
	@Then ("^user move to new deal page$")
	
	public void user_move_to_new_deal_page(){
		driver.switchTo().frame("mainpanel");
		Actions action = new Actions(driver);
		//action.
		action.moveToElement(driver.findElement(By.xpath("//a[contains(text(),'Deals')]"))).build().perform();
		driver.findElement(By.xpath("//a[contains(text(),'New Deal')]")).click();
	    
	}
	
	@Then("^user enters deal detail$")
	public void user_enters_deal_detail(DataTable dealsData)  {
		List<List<String>> dealvalue = dealsData.raw();
		driver.findElement(By.id("title")).sendKeys(dealvalue.get(0).get(0));
		driver.findElement(By.name("amount")).sendKeys(dealvalue.get(0).get(1));		
		driver.findElement(By.id("probability")).sendKeys(dealvalue.get(0).get(2));
		driver.findElement(By.id("commission")).sendKeys(dealvalue.get(0).get(3));
		driver.findElement(By.xpath("//input[@type='submit' and @value = 'Save']")).click();

	}
	@Then("^close the browser$")
	public void close_the_browser(){
		driver.quit();
	   
	}
	
} */

