

This data model assumes a one-to-many relationship between the User and FitnessGoal entities, meaning that a user can have multiple fitness goals.

User:

- id (unique identifier)
- email (user's email address)
- password (hashed and salted password)
- firstName (user's first name)
- lastName (user's last name)
- createdAt (timestamp of user registration)
- updatedAt (timestamp of last update)

FitnessGoal:

- id (unique identifier)
- userId (foreign key referencing User.id)
- type (goal type, e.g., weight loss, muscle building, cardiovascular endurance)
- duration (duration in days, weeks, or months)
- targetMetric (target metric for the goal, e.g., weight, body fat percentage, distance, time)
- targetValue (the desired value for the target metric)
- createdAt (timestamp of goal creation)
- updatedAt (timestamp of last update)
- description (extra details)

GoalProgress:

- id (unique identifier)
- goalId (foreign key referencing FitnessGoal.id)
- progressValue (the progress value for the target metric)
- loggedAt (timestamp of progress update)
