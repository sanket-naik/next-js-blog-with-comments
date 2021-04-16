import markdownStyles from './markdown-styles.module.css'
import BlockContent from '@sanity/block-content-to-react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import CopyClipBoard from './copyClipboard/CopyClipBoard';
import { useState, useCallback } from 'react';

export default function PostBody({ content }) {


  const serializers = {
    types: { 
      exampleUsage: props => (
        <>
         <div>
            {<CopyClipBoard text={props.node.code}/>}
            <SyntaxHighlighter language={props.node.language} style={a11yDark} >
              {props.node.code}
            </SyntaxHighlighter>
         </div>
        </>
      )
    } 
  }

  
  return (
    <div className="max-w-3xl mx-auto">
      <BlockContent blocks={content} serializers={serializers}  projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID} dataset={process.env.NEXT_PUBLIC_SANITY_DATASET} className={markdownStyles.markdown} />
    </div>
  )
}
