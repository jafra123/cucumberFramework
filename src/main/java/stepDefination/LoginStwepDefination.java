package stepDefination;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
public class LoginStwepDefination {
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
	//@Then("^user enters \"(.*)\" and \"(.*)\"$")
	public void user_enters_username_and_password () { //(String username, String password){
	 driver.findElement(By.name("username")).sendKeys("jafra123");
	 driver.findElement(By.name("password")).sendKeys("canada123");
		
	} 
	//
	@Then("^user enters \"([^\"]*)\" and \"([^\"]*)\"$")
	public void user_enters_and(String username, String password) throws Throwable {
		driver.findElement(By.name("username")).sendKeys(username);
	    driver.findElement(By.name("password")).sendKeys(password); 
	}	
	// below code did not work naveen so i got the above code with dryrun step defination file
	@Then("^user enters \"(.*)\" and \"(.*)\" $ ")
	public void user_enters_username_and_password(String username, String password) {
		 driver.findElement(By.name("username")).sendKeys(username);
		    driver.findElement(By.name("password")).sendKeys(password); 
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
	
	@Then("^user move to new contact page$")
	public void user_move_to_new_contact_page(){
		driver.switchTo().frame("mainpanel");
		Actions action = new Actions(driver);
		//action.
		action.moveToElement(driver.findElement(By.xpath("//a[contains(text(),'Contacts')]"))).build().perform();
		driver.findElement(By.xpath("//a[contains(text(),'New Contact')]")).click();
	    
	}
	
	@Then("^user enters contact detail\"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\"$")
	public void user_enters_contact_detail(String firstname, String lastname, String postition)  {
		driver.findElement(By.id("first_name")).sendKeys(firstname);
		driver.findElement(By.id("surname")).sendKeys(lastname);		
		driver.findElement(By.id("company_position")).sendKeys(postition);
		driver.findElement(By.xpath("//input[@type='submit' and @value = 'Save']")).click();

	}
	
	
	@Then("^close the browser$")
	public void close_the_browser() throws Throwable {
	    driver.quit();
	}


}
