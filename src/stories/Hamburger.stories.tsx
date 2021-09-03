import { ComponentStory, ComponentMeta } from '@storybook/react';
import { useArgs } from '@storybook/client-api';
import Hamburder from '../components/Hamburger';

export default {
  title: 'Example/Hamburger',
  component: Hamburder,
} as ComponentMeta<typeof Hamburder>;

const Template: ComponentStory<typeof Hamburder> = (args) =>{
  const [{ isOpen }, updateArgs] = useArgs();
  
  const handleToggle = () =>{
    updateArgs({isOpen: !isOpen});
    args.onToggle?.();
  }

  return (
    <header style={{justifyContent: args.left ? "flex-start" : "flex-end", padding: "0 20px", height:64, display:"flex", alignItems: "center", background: args.dark ? "rgb(0, 21, 41)" :"#EFEFEF"}}>
      <span>
        <Hamburder isOpen={isOpen} left={args.left} dark={args.dark} fixed={args.fixed} onToggle={handleToggle} />
      </span>
    </header>
  );
} 

export const Basic = Template.bind({});
Basic.args = {
  left: false,
  dark: false,
  fixed: false,
};
