package stepDefination;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class MyApplicationStepDefination {
       WebDriver driver;
	
	
	@Given("^open chrome and start applciation$")
	public void open_chrome_and_start_applciation() throws Throwable {
		System.setProperty("webdriver.chrome.driver", "C:/QA/Drivers/chromedriver.exe");
	    driver = new ChromeDriver();
	    driver.get("https://www.facebook.com/");     
	    	    
	} 
	@When("^i enter valid \"([^\"]*)\" and \"([^\"]*)\"$")
	public void i_enter_valid_and(String uname, String pass)  {
		driver.findElement(By.id("email")).sendKeys(uname);;
		driver.findElement(By.id("pass")).sendKeys(pass);;
		
		
	 
	} 

	@Then("^user shoul be able to login succesfully$")
	public void user_shoul_be_able_to_login_succesfully() {
		driver.findElement(By.xpath("//input[@id='u_0_3']")).click();
		
	    
	}
	@Then("^application should be closed$")
	public void application_should_be_closed() {
		driver.quit();
	}



	
}
