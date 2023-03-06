import DefaultAPIInstance from '@/api/client';

const getFetcher = (url: string) => DefaultAPIInstance.get(url).then((res) => res.data);

export default getFetcher;
