package com.smartFitness.itpm.User;

// Generated by Selenium IDE
import org.junit.Test;
import org.junit.Before;
import org.junit.After;

import static org.hamcrest.CoreMatchers.is;
import static org.hamcrest.core.IsNot.not;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.Dimension;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.JavascriptExecutor;

import java.util.*;

//import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit.jupiter.SpringExtension;

@ExtendWith(SpringExtension.class)
@SpringBootTest
public class UserTest {

    private WebDriver driver;
    private Map<String, Object> vars;
    JavascriptExecutor js;
    @Before
    public void setUp() {
        driver = new ChromeDriver();
        js = (JavascriptExecutor) driver;
        vars = new HashMap<String, Object>();
    }
    @After
    public void tearDown() {
        driver.quit();
    }
    @Test
    public void user() {
        driver.get("http://localhost:4200/");
        driver.manage().window().setSize(new Dimension(1552, 832));
        driver.findElement(By.linkText("Sign Up")).click();
        driver.findElement(By.cssSelector(".col-md-6:nth-child(1) .form-control")).click();
        driver.findElement(By.cssSelector(".ng-dirty:nth-child(3)")).sendKeys("Ashen");
        driver.findElement(By.cssSelector(".col-md-6 > .form-group > .ng-untouched")).click();
        driver.findElement(By.cssSelector(".col-md-6 > .form-group > .ng-untouched")).click();
        driver.findElement(By.cssSelector(".col-md-6 > .form-group > .ng-untouched")).sendKeys("Dunusinghe");
        driver.findElement(By.cssSelector(".col-md-12:nth-child(3) .form-control")).click();
        driver.findElement(By.cssSelector(".ng-valid:nth-child(2)")).sendKeys("2022-04-22");
        driver.findElement(By.cssSelector(".form-select")).click();
        {
            WebElement dropdown = driver.findElement(By.cssSelector(".form-select"));
            dropdown.findElement(By.xpath("//option[. = 'Custemer']")).click();
        }
        driver.findElement(By.cssSelector(".ng-untouched:nth-child(2)")).click();
        driver.findElement(By.cssSelector(".ng-untouched:nth-child(2)")).sendKeys("0716256253");
        driver.findElement(By.cssSelector(".col-md-12:nth-child(6) .form-control")).click();
        driver.findElement(By.cssSelector(".col-md-12:nth-child(6) .form-control")).sendKeys("av@gmail.com");
        driver.findElement(By.cssSelector(".col-md-12:nth-child(7) .form-control")).click();
        driver.findElement(By.cssSelector(".col-md-12:nth-child(7) .form-control")).sendKeys("123456");
        driver.findElement(By.cssSelector(".ng-untouched:nth-child(3)")).click();
        driver.findElement(By.cssSelector(".ng-untouched:nth-child(3)")).sendKeys("123456");
        driver.findElement(By.cssSelector(".form-check-label")).click();
        driver.findElement(By.cssSelector(".btn")).click();
        js.executeScript("window.scrollTo(0,0)");
        driver.findElement(By.cssSelector(".col-lg-12:nth-child(1) .form-control")).click();
        driver.findElement(By.cssSelector(".ng-dirty:nth-child(3)")).sendKeys("av@gmail.com");
        driver.findElement(By.cssSelector(".ng-untouched")).click();
        driver.findElement(By.cssSelector(".ng-untouched")).sendKeys("123456");
        driver.findElement(By.cssSelector(".form-check")).click();
        driver.findElement(By.cssSelector(".form-check-label")).click();
        driver.findElement(By.cssSelector(".btn")).click();
        driver.findElement(By.cssSelector(".col-md-6:nth-child(1) > .form-control")).click();
        driver.findElement(By.cssSelector(".ng-dirty:nth-child(2)")).sendKeys("Ashen1");
        driver.findElement(By.cssSelector(".col-md-6 > .ng-untouched")).click();
        driver.findElement(By.cssSelector(".col-md-6 > .ng-untouched")).sendKeys("Dunusinghe2");
        driver.findElement(By.cssSelector(".row:nth-child(2) .form-control")).click();
        driver.findElement(By.cssSelector(".row:nth-child(2) .form-control")).sendKeys("2022-04-20");
        driver.findElement(By.cssSelector(".col-md-7 > .form-control")).click();
        driver.findElement(By.cssSelector(".col-md-7 > .form-control")).sendKeys("0716256252");
        driver.findElement(By.cssSelector(".ng-untouched:nth-child(2)")).click();
        driver.findElement(By.cssSelector(".ng-untouched:nth-child(2)")).sendKeys("av@123gmail.com");
        driver.findElement(By.cssSelector(".btn-primary")).click();
        driver.findElement(By.linkText("User-List")).click();
        driver.findElement(By.cssSelector(".material-icons")).click();
        {
            WebElement element = driver.findElement(By.cssSelector(".material-icons"));
            Actions builder = new Actions(driver);
            builder.moveToElement(element).perform();
        }
        {
            WebElement element = driver.findElement(By.tagName("body"));
            Actions builder = new Actions(driver);
            builder.moveToElement(element, 0, 0).perform();
        }
        driver.findElement(By.cssSelector(".col-xl-6:nth-child(1) > .form-control")).click();
        driver.findElement(By.cssSelector(".ng-dirty:nth-child(2)")).sendKeys("kasun");
        driver.findElement(By.cssSelector(".col-xl-6:nth-child(2) > .form-control")).click();
        driver.findElement(By.cssSelector(".col-xl-6:nth-child(2) > .form-control")).sendKeys("tharaka");
        driver.findElement(By.cssSelector(".col-xl-6:nth-child(3) > .form-control")).click();
        driver.findElement(By.cssSelector(".col-xl-6:nth-child(3) > .form-control")).sendKeys("2022-04-06");
        driver.findElement(By.cssSelector(".form-select")).click();
        {
            WebElement dropdown = driver.findElement(By.cssSelector(".form-select"));
            dropdown.findElement(By.xpath("//option[. = 'Admin']")).click();
        }
        driver.findElement(By.cssSelector(".col-xl-6:nth-child(5) > .form-control")).click();
        driver.findElement(By.cssSelector(".col-xl-6:nth-child(5) > .form-control")).sendKeys("0777777777");
        driver.findElement(By.cssSelector(".col-xl-6:nth-child(6) > .form-control")).click();
        driver.findElement(By.cssSelector(".col-xl-6:nth-child(6) > .form-control")).sendKeys("kasu@gmail.com");
        driver.findElement(By.cssSelector(".col-xl-6:nth-child(7) > .form-control")).click();
        driver.findElement(By.cssSelector(".ng-star-inserted > .ng-dirty")).sendKeys("ka");
        driver.findElement(By.cssSelector(".ng-untouched:nth-child(2)")).click();
        driver.findElement(By.cssSelector(".ng-untouched:nth-child(2)")).sendKeys("ka");
        driver.findElement(By.cssSelector(".modal-footer > .btn-primary")).click();
        driver.findElement(By.cssSelector(".datatable-row-wrapper:nth-child(3) .btn:nth-child(1)")).click();
        driver.findElement(By.cssSelector(".col-xl-6:nth-child(1) > .form-control")).click();
        driver.findElement(By.cssSelector(".ng-dirty:nth-child(2)")).sendKeys("kasu");
        driver.findElement(By.cssSelector(".col-xl-6:nth-child(3) > .form-control")).click();
        driver.findElement(By.cssSelector(".col-xl-6:nth-child(3) > .form-control")).click();
        driver.findElement(By.cssSelector(".col-xl-6:nth-child(3) > .form-control")).sendKeys("2022-04-07");
        driver.findElement(By.cssSelector(".col-xl-6:nth-child(2) > .form-control")).click();
        driver.findElement(By.cssSelector(".col-xl-6:nth-child(2) > .form-control")).sendKeys("tharak");
        driver.findElement(By.cssSelector(".form-select")).click();
        {
            WebElement dropdown = driver.findElement(By.cssSelector(".form-select"));
            dropdown.findElement(By.xpath("//option[. = 'Weight Trainer']")).click();
        }
        driver.findElement(By.cssSelector(".col-xl-6:nth-child(5) > .form-control")).click();
        driver.findElement(By.cssSelector(".col-xl-6:nth-child(5) > .form-control")).sendKeys("0777777778");
        driver.findElement(By.cssSelector(".ng-untouched:nth-child(2)")).click();
        driver.findElement(By.cssSelector(".ng-untouched:nth-child(2)")).sendKeys("kasu@2gmail.com");
        driver.findElement(By.cssSelector(".modal-footer > .btn-primary")).click();
        {
            WebElement element = driver.findElement(By.cssSelector(".modal-footer > .btn-primary"));
            Actions builder = new Actions(driver);
            builder.moveToElement(element).perform();
        }
        {
            WebElement element = driver.findElement(By.tagName("body"));
            Actions builder = new Actions(driver);
            builder.moveToElement(element, 0, 0).perform();
        }
        driver.findElement(By.cssSelector(".datatable-row-wrapper:nth-child(3) .btn:nth-child(2) > .far")).click();
        driver.findElement(By.cssSelector(".swal2-confirm")).click();
    }
}
