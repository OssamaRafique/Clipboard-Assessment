# Ticket Breakdown

We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**

Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".

You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here

The ticket for this feature is to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them. In order to accomplish this, we will be breaking the ticket down into the following tasks:

### Task 1: Add custom id field to Agents table

- #### Acceptance Criteria:
  - A new field for custom id is added to the Agents table in the database
  - The custom id field is nullable
  - The custom id field has a unique constraint
- #### Time/Effort Estimate: 2 hours
- #### Implementation Details:
  - Add the new field to the Agents table
  - Add the unique constraint to the custom id field

### Task 2: Update getShiftsByFacility function to use custom Agent id

- #### Acceptance Criteria:
  - The getShiftsByFacility function returns the custom id for each Agent if it is present, otherwise it returns the internal database id
- #### Time/Effort Estimate: 1 hour
- #### Implementation Details:
  - Update the getShiftsByFacility function to reference the custom Agent id field in the Facilities table instead of the internal database id

### Task 3: Update generateReport function to use custom Agent id

- #### Acceptance Criteria:
  - The generateReport function uses the custom id for each Agent if it is present, otherwise it uses the internal database id
- #### Time/Effort Estimate: 1 hour
- #### Implementation Details:
  - Modify the function to check for the presence of the custom id and use it if it is present

### Task 4: Update documentation

- #### Acceptance Criteria:
  - The documentation for the getShiftsByFacility and generateReport functions is updated to reflect the changes made. And how the new feature works, how to use it and how to troubleshoot it if any issues arise.
- #### Time/Effort Estimate: 1 hour
- #### Implementation Details:
  - Write a detailed documentation on how the new feature works, how to use it and how to troubleshoot it if any issues arise.
  - Make the documentation easily accessible to the users and team members.

### Task 5: Test the feature

- #### Acceptance Criteria:
  - The feature is tested and all bugs are fixed
- #### Time/Effort Estimate: 1 hour
- #### Implementation Details:
  - Test the new feature thoroughly to ensure it is working as expected
  - Deploy the changes to the live platform for use by Facilities.
