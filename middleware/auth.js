import consolaGlobalInstance from "consola";

export default defineNuxtRouteMiddleware(async (to, from) => {
  const config = useRuntimeConfig();

  try {
    const response = await fetch(`${config.public.apiUrl}/api/v1/auth/check-token`,
    { 
      method: 'post',
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('accessToken')
      }
    });
    const data = await response.json();
  
    // console.log('decode token', decode)
    if (data.data !== true) {
      // return abortNavigation({redirectCode: 401})
      return navigateTo('/login', { redirectCode: 401 })
      // throw throwError({ statusCode: 403, statusMessage: 'You Are Not Authorize for this Page', cause: 'Token not found.'});
    }
    // return navigateTo('/', { redirectCode: 403 })
  } catch (error) {
     throw throwError({ statusCode: 500, statusMessage: 'The server cek token seems to be offline, please contact admin :('});
  }
});