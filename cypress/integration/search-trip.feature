Feature: Search trip
  User can type trip keyword on input field and click search button to search trip

  Scenario: Found trip
    Given I visit on the homepage
    When I fill in input filed with "ร้านกาแฟ"
    And I press search button
    Then I should see trip "ลัดเลาะ 10 ที่เที่ยวย่าน BTS สายสีเขียว"
    And I should see trip "ทริปที่เที่ยวและร้านกาแฟเชียงใหม่ ที่สวยได้แบบไม่ต้องไปไกลถึงเกาหลี"

  Scenario: Trip not found
    Given I visit on the homepage
    When I fill in input filed with "cafe"
    And I press search button
    Then I should see "'cafe' Not Found."

  Scenario: Click tag to use as search keyword
    Given I visit on the homepage
    Then I should see tag name "เกาะ"
    When I click tag "เกาะ"
    Then I should see "เกาะ" in search field
    And I should see 2 trips result of "เกาะ"