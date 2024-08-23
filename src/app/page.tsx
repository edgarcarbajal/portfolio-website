import Navi from "./components/navi";

export default function Home() {
  //Sticky Headers only work if html element has no overflow(auto, flow, hidden) applied to it(either on itself or inherited by parents)
  // & if one of the 4 directions (top, bottom, left, right) are defined for the element
  return (
    <main>
      <div className="flex-grow flex flex-col justify-between">
        <div id="about">
          <h2 className="bg-yellow-500 phonesize:sticky phonesize:top-0">
            About
          </h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam posuere elit eu purus posuere accumsan sed nec nisl. Etiam lobortis ornare facilisis. Maecenas nec aliquet eros, ut viverra magna. Fusce odio nibh, varius semper odio sit amet, condimentum laoreet nibh. Vivamus vel finibus tortor. Pellentesque facilisis nibh vitae varius eleifend. Etiam id semper velit. Curabitur dui massa, gravida ut magna vel, rhoncus sagittis ipsum. Proin commodo eu massa vel fringilla. Mauris interdum, ipsum ut commodo tempus, lectus lacus hendrerit dui, at mollis sapien lectus a ligula.</p>
        </div>

        <div id="experience">
          <h2 className="bg-yellow-500 phonesize:sticky phonesize:top-0">
            Experience
          </h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam posuere elit eu purus posuere accumsan sed nec nisl. Etiam lobortis ornare facilisis. Maecenas nec aliquet eros, ut viverra magna. Fusce odio nibh, varius semper odio sit amet, condimentum laoreet nibh. Vivamus vel finibus tortor. Pellentesque facilisis nibh vitae varius eleifend. Etiam id semper velit. Curabitur dui massa, gravida ut magna vel, rhoncus sagittis ipsum. Proin commodo eu massa vel fringilla. Mauris interdum, ipsum ut commodo tempus, lectus lacus hendrerit dui, at mollis sapien lectus a ligula.</p>
        </div>

        <div id="projects">
          <h2 className="bg-yellow-500 phonesize:sticky phonesize:top-0">
            Projects
          </h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam posuere elit eu purus posuere accumsan sed nec nisl. Etiam lobortis ornare facilisis. Maecenas nec aliquet eros, ut viverra magna. Fusce odio nibh, varius semper odio sit amet, condimentum laoreet nibh. Vivamus vel finibus tortor. Pellentesque facilisis nibh vitae varius eleifend. Etiam id semper velit. Curabitur dui massa, gravida ut magna vel, rhoncus sagittis ipsum. Proin commodo eu massa vel fringilla. Mauris interdum, ipsum ut commodo tempus, lectus lacus hendrerit dui, at mollis sapien lectus a ligula.</p>
        </div>

      </div>
    </main>
  );
}
