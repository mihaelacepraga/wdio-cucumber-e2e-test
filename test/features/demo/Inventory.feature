Feature: Inventory

    @demo @smoke
    Scenario Outline: Demo Inventory
        Given Login to a invertory web app
        Then Inventory page should list <numberOfProducts>
        Then Validate all products have valid price


        Examples:
            | TestID     | numberOfProducts |
            | INVT_TC001 | 6                |


