import markdownStyles from './markdown-styles.module.css'
import BlockContent from '@sanity/block-content-to-react'
// import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
// import { a11yDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';


export default function PostBody({ content }) {

  // const serializers = {
  //   types: { 
  //     exampleUsage: props => (
  //        <SyntaxHighlighter language={props.node.language} style={a11yDark}>
  //          {props.node.code}
  //        </SyntaxHighlighter>
  //     )
  //   }
  // }

  
  return (
    <div className="max-w-2xl mx-auto">
      <BlockContent blocks={content}  projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID} dataset={process.env.NEXT_PUBLIC_SANITY_DATASET} className={markdownStyles.markdown} />
    </div>
  )
}
