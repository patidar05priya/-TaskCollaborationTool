# -TaskCollaborationTool


## Build docker image

``docker build -t fitness-goal-tracker .
``

## Tag docker image
``docker tag fitness-goal-tracker patidar05priya/fitness-goal-tracker:1.0.0``

## Push docker image
``docker push patidar05priya/fitness-goal-tracker:1.0.0``

## Pull docker image
``docker pull patidar05priya/fitness-goal-tracker:1.0.0``

## Run docker image
``docker run -p 8080:8080 fitness-goal-tracker:1.0.0``
