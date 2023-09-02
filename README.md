# SMU Fintech x CraftWills
In the upcoming 2023 series of the Developer Subcommittee Track at SMU Fintech, we're embarking on more than just a learning journey – we're on a mission. We aim to collaboratively design, develop, and deploy a state-of-the-art financial technology solution, poised to be a national benchmark. This program isn't just about assimilating knowledge; it's about application, innovation, and transformation.

By participating, you won't merely be mastering fintech intricacies. You'll be at the forefront of a project with national significance. Here, you have a golden chance to fuse your technical prowess with a purpose, crafting a solution that addresses real-world challenges and touches the lives of countless Singaporeans. It's not just about building an application; it's about crafting a legacy, about being a contributor to the future of fintech in our nation. Dive in, and be a part of this transformative journey where technology meets impact, and where your skills can help shape the financial future of our country.

# Program Flow
Session 1) Figma

Session 2) Express.js

Session 3) React.js

Session 4) MERN

Session 5) ChatGPT

Session 6) Docker, Heroku & Vercel


# User Asset Tracking Function
## Objective
Provide users with a comprehensive and user-friendly platform for efficiently tracking their financial and tangible assets.


## Background
In the modern financial landscape, individuals often have assets spread across various platforms, making it challenging to maintain a holistic view of their portfolio. This function aims to be a solution to this challenge by providing a consolidated platform for tracking assets.


## Feature Scope
### 1) Asset Input Interface
A user-friendly interface where users can manually input details of their assets, whether they are financial (stocks, bonds, cash holdings) or tangible (real estate, collectibles).

### 2) Asset Categories
Different categories (e.g., Real Estate, Stocks, Bonds, Collectibles) where users can organize their assets for better clarity.

### 3) Dashboard View
A comprehensive dashboard where users can view the total value of their assets, categorized breakdowns, and individual asset details.

### 4) Alerts and Notifications
System-generated alerts if there are possible significant changes in the value of an asset due to newly released regulations or business circumstances.


## Process Flow
1. Registration & Login: User registers/logs in to the platform.


2. Initial Setup: User is prompted to either manually add assets or link their digital financial platforms for automatic data retrieval.


3. Manual Asset Addition:
- User selects 'Add Asset'.
- Chooses the asset category (e.g., Stocks, Real Estate).
- Inputs relevant details (e.g., Stock name, number of shares, purchase price).
- Saves the assets.


4. Dashboard Interaction:
- User can view a summary of all assets, total value, and categorized breakdown.
- Option to click on individual assets to view more detailed information.
- Ability to edit or delete asset details.


5. Asset History:
- User selects an asset.
- Chooses 'View History' to see historical performance or value changes.


6. Receiving Alerts:
- System sends alerts based on admin broadcast.
- User can view and manage these alerts in the 'Notifications' section.


7. Logging Out & Data Security: After interacting, user can log out. All data is saved and secured using industry-leading encryption standards.


# Asset Analysis Platform
## Objective
To empower users with a ChatGPT-enhanced platform that provides in-depth, real-time insights into their assets. By spotlighting potential risks, legal obligations, and financial nuances, users can make more informed decisions and sidestep potential pitfalls.

## Background
With the intricacies of the financial sector, many individuals might miss out on specific regulatory or market-related nuances that can have financial implications. Traditional analysis tools can be limited in their real-time responsiveness. Leveraging the power of ChatGPT, the Asset Analysis Platform aims to create an interactive and intuitive preliminary advisory experience that bridges this knowledge gap.


## Feature Scope
### 1) ChatGPT Integration
Seamless integration of ChatGPT into the platform, ensuring real-time, responsive, and contextual advice based on user queries.

### 2) Interactive Analysis Interface
A chat-like interface where users can ask questions, receive insights, and get clarifications on their asset portfolio.

### 3) Contextual Analysis
Send user-specific data to ChatGPT for tailored advice, ensuring that insights are personalized and relevant.

### 4) Scenario Simulation
Through ChatGPT, users can simulate financial scenarios, such as buying an additional property, and receive real-time feedback on implications.

### 5) Historical and Predictive Analysis
Utilizing ChatGPT's capabilities to provide users with insights based on historical data and potential future scenarios.


## Process Flow
### Accessing the Analysis Platform
After logging in, users can navigate to the Asset Analysis section.

### Initiating ChatGPT Session
Users click on "Analysis" to start an interactive session with ChatGPT.

### Contextual Information Submission
The platform sends a contextual overview of the user's assets to ChatGPT to tailor the interaction.

### Interactive Querying
Users can ask specific questions like, "What happens if I buy another house in Singapore?" and receive immediate, tailored feedback.

### Deep Dive into Assets
Users can specify which asset they want more detailed insights on, and ChatGPT will provide a thorough analysis based on the data it received.

### Legal Alerts & Updates
When discussing specific assets, ChatGPT can proactively notify users of relevant regulatory changes or updates, ensuring they're always up-to-date.

### End Session & Summary
After the interactive session, users receive a summary of the insights and recommendations provided by ChatGPT.


# Estate Distribution Function
## Objective
To provide a seamless, user-friendly platform that guides users through the intricate process of estate planning. This feature streamlines the creation of Wills and Trusts, ensuring users can articulate clear directives on their asset distribution, thus offering an unmatched peace of mind during the estate planning phase.


## Background
The traditional method of crafting Wills and Trusts can be cumbersome, daunting, and riddled with potential oversight. Recognizing these pain points, the Estate Distribution Function is envisioned as a comprehensive solution. It uses the information already input by the user, automating the distribution process to ensure clarity and alignment with the user's wishes.

## Feature Scope
### 1) Intuitive Interface
A straightforward, step-by-step platform guiding users through executor, guardian, asset distribution, trust creation, and residual estate decisions.

### 2) Dynamic Asset Allocation
Drawing from the Asset Tracking Function, users can specify distribution details, including percentages, equal divisions, and beneficiary specifications.

### 3) Executor & Guardian Assignments
Allows users to detail primary and replacement executors and guardians, capturing essential details such as Name, NRIC, and Address.

### 4) Trust Formation
Facilitates the creation of Trusts, detailing its purpose, duration, trustee powers, beneficiary details, and specific distribution strategies.

### 5) Residual Estate Management
Offers clarity on assets not explicitly mentioned, guiding users on setting up residual estate instructions.

### 6) Final Words & Advisor Clause
Provides a section for users to articulate their final wishes and recommendations on financial advisors for any posthumous inquiries.


## Process Flow
### User Process Flow:

### Initiation & Central Data Collection:
- Login/Registration: Users enter their credentials or register for a new account.
- Dashboard Access: Once authenticated, users access their personalized dashboard.
- Centralized Personal Data Entry: Under the 'Profile' or 'My Information' tab, users input primary personal details: Full Name, NRIC, Address, and Relationship Status. This data acts as a foundation for other processes.

### Executor & Guardian Setup:
- Executor/Guardian Tab Access: A dedicated tab or section is available on the dashboard.
- Selection & Role Assignment: Users choose contacts from their centralized database and specify if they'll serve as primary executors or guardians. Roles can be defined as sole, jointly, or jointly and severally.
- Replacement Executor/Guardian Assignment: For each primary executor or guardian, a prompt appears to assign replacements. The system recommends this as a contingency, ensuring that even in the absence of a primary executor or guardian, the user's wishes can still be executed.
- Verification: A summary page displays chosen executors, guardians, and their replacements for review.

### Asset Distribution Allocation:
- Asset View: Users access a segmented, categorized display of assets.
- Distribution Specifications: For each asset, a detailed form appears. It captures distribution methods, number of beneficiaries, and any contingencies. There are options like splitting equally or by percentage.
- Contingency Options: Users get prompts for contingency scenarios. For instance, if a primary beneficiary predeceases the user, should the asset:
  - Go to the beneficiary's child/ren?
  - Split among other beneficiaries?
  - Transfer to a specific replacement beneficiary?
  - Contribute to the residual estate?
  
### Beneficiary Management:
- Beneficiary Tab Access: This is segmented into primary and replacement beneficiaries.
- Adding Beneficiaries: Using the 'Add Beneficiary' function, users can select from the centralized contact list or add a new contact.
- Setting Replacements: Similar to the executors and guardians, users are prompted to set replacements for primary beneficiaries.
- Review & Validation: A snapshot view of beneficiaries and their replacements is shown, ensuring that all are covered.

### Trust Formation Flow:
- Trust Creation Wizard: The system offers a linear step-by-step guide to form trusts.
- Trustee Appointment: Using the centralized database, users appoint trustees. They can also appoint replacements and define powers, limitations, and clauses.
- Asset Allocation to Trust: Here, users can drag and drop assets into trust categories.
- Payout Conditions & Beneficiary Allocation: Detailed conditions, frequencies, amounts, and special clauses are set. Beneficiaries can be selected, and their unique conditions can be tailored.

### Residual Estate Instruction:
- System Alerts: Automated reminders notify users of unallocated assets.
- Residual Estate Distribution Setup: Users define the distribution logic for the remaining assets.
- Review & Summary: A consolidated view allows users to verify that all assets, even the unassigned ones, have directions for allocation.

### Final Thoughts & Advisor Clause Input:
- Note Space: A dedicated editor allows users to pen down their final words.
- Advisor Assignment: From the central database, users can either choose a pre-existing advisor or add a new one, ensuring their beneficiaries have the right guidance when the time comes.

### Review, Finalization & Document Security:
- Full Overview: Users access a collapsible, detailed display of all decisions.
- Edit & Adjust: With quick-edit options, users can rectify or modify any section.
- Final Confirmation: After a thorough review, users lock in their decisions, securing the document with a password or biometric authentication.

### All details will be sent to the API server to generate a full PDF Will & Trust Document.
