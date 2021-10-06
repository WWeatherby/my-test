import React, {  useState } from 'react';
import { SearchBox, ISearchBoxStyles, StackItem, Stack, IStackStyles, IStackItemStyles } from '@fluentui/react';
import ShowResults from './ShowResults';

const margins = 8;
const searchBoxStyles: Partial<ISearchBoxStyles> = { root: { width: 200 } };
const stackStyles: IStackStyles = {
  root: [
    {
      margin: margins,
    },
  ],
}; 
const stackItemStyles: IStackItemStyles = {
  root: {
    alignItems: 'start',
    marginBottom: margins,
  },
};
export default function SearchName(){
  const [searchString, setSearchString] = useState<string | undefined>();

  return (
    <Stack styles={stackStyles}>
      <StackItem styles={stackItemStyles}>
        <SearchBox
          styles={searchBoxStyles}
          name={'SearchBox'}
          placeholder="Search Github"
          onChange={(_, newValue) => {console.log('SearchBox onChange fired: ' + newValue); setSearchString(newValue)}}
          disableAnimation={true}
        />
      </StackItem>
      <StackItem styles={stackItemStyles}>
        <ShowResults searchString={searchString} />
      </StackItem>
    </Stack>
  )
}
