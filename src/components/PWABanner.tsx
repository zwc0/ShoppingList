import { useRegisterSW } from 'virtual:pwa-register/preact'

export default () => {
    const {
        needRefresh: [needRefresh],
        updateServiceWorker,
      } = useRegisterSW({});

    if (!needRefresh)
        return <></>;
    return <div className='sticky bottom-0 p-1 mt-4 bg-blue-500 text-white text-center'>
        <span>Update available. </span>
        <button onClick={() => updateServiceWorker(true)} className="font-bold underline">
            Click here
        </button>
        <span> to install.</span>
    </div>;
}