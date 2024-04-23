import { useContext } from 'react';
import { AppContext } from './AppContext';


export function OverviewInstructions() {
  const context = useContext(AppContext);
  // const params = context.params;
  // const t = params.t;

  return (
    <div className='instructions'><span className='hi'>👋</span>Hi! This project is called <strong>ogfnsi</strong> and is fork of famous <a target='_blank' href='https://github.com/osmlab/name-suggestion-index/'>name-suggestion-index</a>, which is important for many editor in OSM and be seen as a infrastruce.<br/>
      <br/>
      This site is using the same technology and apply it to OGF. This instance is running on <strong>GitHub Action</strong> and link to the domain <strong>ogfnsi.laoshubaby.moe</strong>. 
      <br/>(Maybe OGFlab will have its own domain name in the future)
      <br/>
      <br/>
      For more technical details you can visit <a target='_blank' href='https://github.com/osmlab/name-suggestion-index/blob/main/CONTRIBUTING.md'>CONTRIBUTING.md (Upstream)</a> for more info, or contact @laoshubaby or @lemuria. <br/>
    </div>
  );
};
