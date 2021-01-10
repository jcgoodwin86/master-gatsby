import { MdStore as icon } from 'react-icons/md';

export default {
  // Computer name
  name: 'storesettings',
  // visible name
  title: 'Settings',
  type: 'document',
  icon,
  fields: [
    {
      name: 'slicemaster',
      title: 'Slicemasters Currently Slicing',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'person' }] }],
    },
  ],
};
