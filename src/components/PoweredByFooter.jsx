const PoweredByFooter = () => {
  return (
    <div className="mt-8 text-center">
      <p className="text-gray-400 text-sm">
        Powered by{' '}
        <a 
          href="https://www.themeridianagency.xyz/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-primary-400 hover:text-primary-300 font-semibold transition-colors duration-200 underline decoration-2 underline-offset-2"
        >
          The Meridian Agency
        </a>
      </p>
    </div>
  )
}

export default PoweredByFooter

