import getFullResponseFromAPI from './1-promise';

describe('getFullResponseFromAPI', () => {

  test('returns a Promise', () => {
    const failPromise = getFullResponseFromAPI(false);
    failPromise.catch(() => {}); // ✅ évite l'UnhandledPromiseRejection

    expect(getFullResponseFromAPI(true)).toBeInstanceOf(Promise);
    expect(failPromise).toBeInstanceOf(Promise);
  });

  test('resolves with correct object when success is true', async () => {
    const response = await getFullResponseFromAPI(true);
    expect(response).toEqual({ status: 200, body: 'Success' });
  });

  test('resolves with status 200 when success is true', async () => {
    const response = await getFullResponseFromAPI(true);
    expect(response.status).toBe(200);
  });

  test('resolves with body "Success" when success is true', async () => {
    const response = await getFullResponseFromAPI(true);
    expect(response.body).toBe('Success');
  });

  test('rejects with an Error when success is false', async () => {
    await expect(getFullResponseFromAPI(false)).rejects.toBeInstanceOf(Error);
  });

  test('rejects with the correct error message when success is false', async () => {
    await expect(getFullResponseFromAPI(false)).rejects.toThrow(
      'The fake API is not working currently'
    );
  });

});