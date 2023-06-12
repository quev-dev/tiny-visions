import {useStore} from '@nanostores/react'
import { dialogState, dialogContent } from '@src/store/tarotStore';
import TarotCard from "./TarotCard";

export default function TartCardButton({info}) {
  const $dialogState = useStore(dialogState);
  const $dialogContent = useStore(dialogContent);
  
  return (
    <button onClick={() => {
      dialogState.set(!$dialogState)
      dialogContent.set(info)
    }}>
      <TarotCard title={info.frontmatter.title} />
      <h3 className='mt-6'>{info.frontmatter.title}</h3>
    </button>
  );
}
