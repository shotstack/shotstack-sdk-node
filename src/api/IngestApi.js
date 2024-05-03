/**
 * Shotstack
 * Official Node SDK for the Shotstack Cloud Video Editing API
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import IngestErrorResponse from '../model/IngestErrorResponse';
import QueuedSourceResponse from '../model/QueuedSourceResponse';
import Source from '../model/Source';
import SourceListResponse from '../model/SourceListResponse';
import SourceResponse from '../model/SourceResponse';
import UploadResponse from '../model/UploadResponse';

/**
* Ingest service.
* @module api/IngestApi
* @version 0.2.6
*/
export default class IngestApi {

    /**
    * Constructs a new IngestApi. 
    * @alias module:api/IngestApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Delete Source
     * Delete an ingested source file by its id.  **Base URL:** <a href=\"#\">https://api.shotstack.io/ingest/{version}</a> 
     * @param {String} id The id of the source file in [KSUID](https://github.com/segmentio/ksuid#what-is-a-ksuid) format.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    deleteSourceWithHttpInfo(id) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling deleteSource");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['DeveloperKey'];
      let contentTypes = [];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/sources/{id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Delete Source
     * Delete an ingested source file by its id.  **Base URL:** <a href=\"#\">https://api.shotstack.io/ingest/{version}</a> 
     * @param {String} id The id of the source file in [KSUID](https://github.com/segmentio/ksuid#what-is-a-ksuid) format.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    deleteSource(id) {
      return this.deleteSourceWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get Source
     * Fetch a source file details and status by its id.  **Base URL:** <a href=\"#\">https://api.shotstack.io/ingest/{version}</a> 
     * @param {String} id The id of the source file in [KSUID](https://github.com/segmentio/ksuid#what-is-a-ksuid) format.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SourceResponse} and HTTP response
     */
    getSourceWithHttpInfo(id) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getSource");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['DeveloperKey'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = SourceResponse;
      return this.apiClient.callApi(
        '/sources/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get Source
     * Fetch a source file details and status by its id.  **Base URL:** <a href=\"#\">https://api.shotstack.io/ingest/{version}</a> 
     * @param {String} id The id of the source file in [KSUID](https://github.com/segmentio/ksuid#what-is-a-ksuid) format.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SourceResponse}
     */
    getSource(id) {
      return this.getSourceWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * List Sources
     * Retrieve a list of ingested source files stored against a users account and stage.  **Base URL:** <a href=\"#\">https://api.shotstack.io/ingest/{version}</a> 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SourceListResponse} and HTTP response
     */
    getSourcesWithHttpInfo() {
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['DeveloperKey'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = SourceListResponse;
      return this.apiClient.callApi(
        '/sources', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * List Sources
     * Retrieve a list of ingested source files stored against a users account and stage.  **Base URL:** <a href=\"#\">https://api.shotstack.io/ingest/{version}</a> 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SourceListResponse}
     */
    getSources() {
      return this.getSourcesWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Direct Upload
     * Request a signed URL to upload a file to. The response returns a signed URL that you use to upload the file to. The signed URL looks similar to:  https://shotstack-ingest-api-stage-sources.s3.ap-southeast-2.amazonaws.com/5ca6hu7s9k/zzytey4v-32km-kq1z-aftr-3kcuqi0brad2/source?AWSAccessKeyId=ASIAWJV7UWDMGTZLHTXP&Expires=1677209777&Signature=PKR4dGDDdOuMTAQmDASzLGmLOeo%3D&x-amz-acl=public-read&x-amz-security-token=IQoJb3JpZ2luX2VjEGMaDmFwLX......56osBGByztm7WZdbmXzO09KR  In a separate API call, use this signed URL to send a PUT request with the binary file. Using  cURL you can use a command like:      `curl -X PUT -T video.mp4 {data.attributes.url}`      Where **video.mp4** is the file you want to upload and **{data.attributes.url}** is the signed URL returned in the response. The request must be a PUT type.  The SDK does not currently support the PUT request. You can use the SDK to make the request for the signed URL and then use cURL to make the PUT request.  **Base URL:** <a href=\"#\">https://api.shotstack.io/ingest/{version}</a> 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/UploadResponse} and HTTP response
     */
    getUploadSignedUrlWithHttpInfo() {
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['DeveloperKey'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = UploadResponse;
      return this.apiClient.callApi(
        '/upload', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Direct Upload
     * Request a signed URL to upload a file to. The response returns a signed URL that you use to upload the file to. The signed URL looks similar to:  https://shotstack-ingest-api-stage-sources.s3.ap-southeast-2.amazonaws.com/5ca6hu7s9k/zzytey4v-32km-kq1z-aftr-3kcuqi0brad2/source?AWSAccessKeyId=ASIAWJV7UWDMGTZLHTXP&Expires=1677209777&Signature=PKR4dGDDdOuMTAQmDASzLGmLOeo%3D&x-amz-acl=public-read&x-amz-security-token=IQoJb3JpZ2luX2VjEGMaDmFwLX......56osBGByztm7WZdbmXzO09KR  In a separate API call, use this signed URL to send a PUT request with the binary file. Using  cURL you can use a command like:      `curl -X PUT -T video.mp4 {data.attributes.url}`      Where **video.mp4** is the file you want to upload and **{data.attributes.url}** is the signed URL returned in the response. The request must be a PUT type.  The SDK does not currently support the PUT request. You can use the SDK to make the request for the signed URL and then use cURL to make the PUT request.  **Base URL:** <a href=\"#\">https://api.shotstack.io/ingest/{version}</a> 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/UploadResponse}
     */
    getUploadSignedUrl() {
      return this.getUploadSignedUrlWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Fetch Source
     * Queue a source file to be fetched from a URL and stored by Shotstack. Source files can be videos, images, audio files and fonts. Once ingested, new [output renditions](#tocs_outputs) can be created from the source file.  **Base URL:** <a href=\"#\">https://api.shotstack.io/ingest/{version}</a> 
     * @param {module:model/Source} source Ingest a video, image, audio or font file from the provided URL. Optionally provide a list of output renditions.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/QueuedSourceResponse} and HTTP response
     */
    postSourceWithHttpInfo(source) {
      let postBody = source;
      // verify the required parameter 'source' is set
      if (source === undefined || source === null) {
        throw new Error("Missing the required parameter 'source' when calling postSource");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['DeveloperKey'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = QueuedSourceResponse;
      return this.apiClient.callApi(
        '/sources', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Fetch Source
     * Queue a source file to be fetched from a URL and stored by Shotstack. Source files can be videos, images, audio files and fonts. Once ingested, new [output renditions](#tocs_outputs) can be created from the source file.  **Base URL:** <a href=\"#\">https://api.shotstack.io/ingest/{version}</a> 
     * @param {module:model/Source} source Ingest a video, image, audio or font file from the provided URL. Optionally provide a list of output renditions.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/QueuedSourceResponse}
     */
    postSource(source) {
      return this.postSourceWithHttpInfo(source)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
