// TODO: create a new page component based on the bottom half of the design in public/mockups/home.png

// You fill first need to create three components: SecondaryImage, PetAboutText, and PetCard in the src/components folder. 

// You should also create stories for each of these components in the src/components folder using storybook.

// Use these three components to create the About page
// Look in the public/mockups folder for the design
// 1. Create a component called SecondaryImage based on the design in public/mockups/secondary-image.png
// 2. Create a component called PetAboutText based on the design in public/mockups/description-title.png
// 3. Create a component called PetCard based on the design in public/mockups/amigo-card.png
// Optional: include the "Header from the Home page" at the top of the About page

// 🐒

import PetCard from "../components/PetCard";

export default function AboutPage() {
  return (
    <div>
      <div className="text-4xl">
        About
        <br/> <br/> <br/>
      </div>
      <div className="flex justify-between mx-9">
        <div className="w-2/5">
          <PetCard emoji="🐌" description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis repellat dicta neque."/>
         </div>
         <div className="w-2/5">
            <PetCard emoji="🦑" description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis repellat dicta neque."/>
          </div>
      </div>
      <div className="flex justify-between mx-9 mt-4">
          <PetCard emoji="🐒" description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis repellat dicta neque."/>
      </div>
    </div>

  );
}