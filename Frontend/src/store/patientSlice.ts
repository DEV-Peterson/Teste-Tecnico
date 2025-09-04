import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { Patient, PatientFormData, PatientSearchParams } from '../types/Patient';

export const patientApi = createApi({
  reducerPath: 'patientApi',
  baseQuery: fetchBaseQuery({
    baseUrl: '/api',
    prepareHeaders: (headers) => {
      headers.set('Content-Type', 'application/json');
      return headers;
    },
  }),
  tagTypes: ['Patient'],
  endpoints: (builder) => ({
    getPatients: builder.query<Patient[], PatientSearchParams>({
      query: (params) => ({
        url: '/pacientes',
        params,
      }),
      providesTags: ['Patient'],
    }),
    createPatient: builder.mutation<Patient, PatientFormData>({
      query: (patient) => ({
        url: '/pacientes',
        method: 'POST',
        body: patient,
      }),
      invalidatesTags: ['Patient'],
    }),
  }),
});

export const { useGetPatientsQuery, useCreatePatientMutation } = patientApi;