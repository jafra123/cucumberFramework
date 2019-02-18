package Runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
	
		features = "C:/Users/b/eclipse-workspace/FreeCrmBDDFrameworkNaveen/src/main/java/Features/dealsmap.feature", // feature file location 
		glue = {"stepDefination"} // step defination file 
		//,format = {"pretty", "html:test-output"} // this is we see the console nocely at 1:00:00 cucumber video 1 naveen 
		//,format = {"pretty", "html:test-output", "json:json_output/cucumber.json"} // jason format report will be created 
		,format = {"pretty", "html:test-output", "json:json_output/cucumber.json","junit:junit_xml/cucumber.xml" } // junit format report will be created 
		,dryRun = false
		,monochrome = true // display the console output in a proper readable format		
		,strict = true
		
		)
public class TestRunner {

}
