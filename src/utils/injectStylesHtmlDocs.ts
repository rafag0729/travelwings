export const injectStyles = (body: string): string => (`
<html>
<head>
<style>
  h1 { 
    margin-bottom: 1rem;
    font-weight: bold
  }
  p { margin-bottom: 1rem }
  ul { margin-bottom: 1rem, list-style: inside }
  li { margin-bottom: .5rem; margin-left: 1.5 rem }
</style>
</head>
<body>${body}</body></html>
`)