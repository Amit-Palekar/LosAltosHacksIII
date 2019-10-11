# LosAltosHacksIII

### Inspiration

When brainstorming ideas for the problems, we found that many firefighters do not have access to building plans during crises. Furthermore, the interior design of complex buildings provide a specific challenge to firefighters because they find it extremely difficult to navigate through different room based on room numbers or find locations of elevators and fire hoses. We decided to solve this problem using 3D Mapping of buildings because each and every second is of paramount importance when it comes to saving lives. :)

### What it does
First, we use the Google Maps API to locate the place where the disaster is currently happening. After clicking on the corresponding marker for the place, the destination is sent to our backend server where we compute the location of the building and superimpose it on to a map through the use of the wrld.js api. We also used the API to design a sleek and easily maneuverable, virtual representation of the building and the important locations within (elevators, stairs, etc). Firefighters are able to observe the floor plans and each location within them. The app also allows them to take notes on the maps to help create a strategy to enter the building and also to estimate where the majority of people are located.

### What's next?
We want toi implement a better UI/UX frontend and also more detailed instructions about the facility in different formats. With the better mapping of complex facilities over time, we believe that this will become a possibility in the future. We were also working on a path planning algorithm that would devise a path to different parts inside the building but could not complete this in time.
