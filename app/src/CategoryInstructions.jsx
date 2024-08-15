import { useContext } from 'react';
import { AppContext } from './AppContext';


export function CategoryInstructions() {
  const context = useContext(AppContext);
  const params = context.params;
  const t = params.t;

  // setup defaults for this tree..
  let a, itemType, logo, wikidataTag;
  if (t === 'brands') {
    a = 'a';
    itemType = 'brand';
    logo = 'logos';
    wikidataTag = 'brand:wikidata';
  } else if (t === 'flags') {
    a = 'a';
    itemType = 'flag';
    logo = 'a commons logo';
    wikidataTag = 'flag:wikidata';
  } else if (t === 'operators') {
    a = 'an';
    itemType = 'operator';
    logo = 'logos';
    wikidataTag = 'operator:wikidata';
  } else if (t === 'transit') {
    a = 'a';
    itemType = 'network';
    logo = 'logos';
    wikidataTag = 'network:wikidata';
  }

  // Flags don't have Facebook accounts
  let social = '';
  if (t !== 'flags') {
    social = `You can add the ${itemType}'s Facebook username, and this project will pick up the logos later.`;
  }

  return (
    <div className='instructions'>Some things you can do here:
      <ul>
      <li>Is {a} {itemType} missing or want to add new ones? <a target='_blank' href='https://github.com/OGFlab/name-suggestion-index/pulls'>Open an pull request</a> to add it!</li>
      <li>Click the "Search Overpass Turbo" link to see where the {itemType} is mapped in OpenGeofiction.</li>
      <li>If an entry you wish to edit is generated from a template, you may need to edit the original (master) template if the values match, or create a separate new entry if the values will be different.</li>
      </ul>
    </div>
  );
};
