import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { firebaseStorage } from "../firebase";
import uuid from "react-native-uuid";

export async function uploadImage(uri: string) {
  const blob: any = await new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.onload = function () {
      resolve(xhr.response);
    };
    xhr.onerror = function (e) {
      console.log(e);
      reject(new TypeError("Network request failed"));
    };
    xhr.responseType = "blob";
    xhr.open("GET", uri, true);
    xhr.send(null);
  });
  const imageName = uuid.v4() as string;
  const fileRef = ref(firebaseStorage, imageName);
  await uploadBytes(fileRef, blob);

  // We're done with the blob, close and release it
  blob.close();

  const imageUrl = await getDownloadURL(fileRef);
  return { imageName, imageUrl };
}
