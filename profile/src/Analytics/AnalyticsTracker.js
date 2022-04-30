
import ReactGA from 'react-ga';

const useEventTracker = () => {
    const eventTracker = (category,action) => {
        ReactGA.event({category, action})
    }

    return eventTracker;    
}
export default useEventTracker;