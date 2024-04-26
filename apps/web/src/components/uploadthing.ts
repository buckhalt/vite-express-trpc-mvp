import {
   generateReactHelpers,
   generateUploadButton,
   generateUploadDropzone,
   type GenerateTypedHelpersOptions,
} from '@uploadthing/react';

import { type OurFileRouter } from '../../../server/src/uploadthing';

const initOpts = {
   url: 'https://studio-server-a2l0.onrender.com/api/uploadthing',
} satisfies GenerateTypedHelpersOptions;

export const UploadButton = generateUploadButton<OurFileRouter>(initOpts);
export const UploadDropzone = generateUploadDropzone<OurFileRouter>(initOpts);

export const { useUploadThing } = generateReactHelpers<OurFileRouter>(initOpts);
