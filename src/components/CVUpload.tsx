'use client'

import { useState, useCallback } from 'react'
import { Upload, FileText, CheckCircle, XCircle, Loader2 } from 'lucide-react'

interface CVUploadProps {
  onUploadSuccess?: (cvId: string) => void
}

export default function CVUpload({ onUploadSuccess }: CVUploadProps) {
  const [file, setFile] = useState<File | null>(null)
  const [uploading, setUploading] = useState(false)
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')
  const [dragActive, setDragActive] = useState(false)

  const handleDrag = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true)
    } else if (e.type === 'dragleave') {
      setDragActive(false)
    }
  }, [])

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setFile(e.dataTransfer.files[0])
    }
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0])
    }
  }

  const handleUpload = async () => {
    if (!file) return

    setUploading(true)
    setStatus('idle')
    setMessage('')

    try {
      const formData = new FormData()
      formData.append('file', file)

      const response = await fetch('/api/cv/upload', {
        method: 'POST',
        body: formData,
      })

      const data = await response.json()

      if (data.ok) {
        setStatus('success')
        setMessage('CV téléchargé avec succès! Nous vous enverrons un email avec votre CV amélioré.')
        setFile(null)
        if (onUploadSuccess) {
          onUploadSuccess(data.data.cvId)
        }
      } else {
        setStatus('error')
        setMessage(data.error?.message || 'Une erreur est survenue')
      }
    } catch (error) {
      setStatus('error')
      setMessage('Erreur de connexion. Veuillez réessayer.')
    } finally {
      setUploading(false)
    }
  }

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div
        className={`relative border-2 border-dashed rounded-lg p-12 text-center transition-colors ${
          dragActive
            ? 'border-primary-500 bg-primary-50'
            : 'border-gray-300 hover:border-primary-400'
        }`}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
      >
        <input
          type="file"
          id="file-upload"
          className="hidden"
          accept=".pdf,.doc,.docx,.txt"
          onChange={handleChange}
          disabled={uploading}
        />

        {!file ? (
          <div className="space-y-4">
            <div className="flex justify-center">
              <Upload className="w-16 h-16 text-gray-400" />
            </div>
            <div>
              <label
                htmlFor="file-upload"
                className="cursor-pointer text-primary-600 hover:text-primary-700 font-semibold"
              >
                Cliquez pour télécharger
              </label>
              <span className="text-gray-600"> ou glissez-déposez votre CV</span>
            </div>
            <p className="text-sm text-gray-500">PDF, DOC, DOCX ou TXT (max. 10MB)</p>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="flex justify-center">
              <FileText className="w-16 h-16 text-primary-500" />
            </div>
            <div>
              <p className="font-semibold text-gray-700">{file.name}</p>
              <p className="text-sm text-gray-500">
                {(file.size / 1024 / 1024).toFixed(2)} MB
              </p>
            </div>
            <div className="flex gap-3 justify-center">
              <button
                onClick={() => setFile(null)}
                className="px-4 py-2 text-gray-600 hover:text-gray-800 font-medium"
                disabled={uploading}
              >
                Annuler
              </button>
              <button
                onClick={handleUpload}
                disabled={uploading}
                className="px-6 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 disabled:opacity-50 disabled:cursor-not-allowed font-medium flex items-center gap-2"
              >
                {uploading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Traitement...
                  </>
                ) : (
                  'Télécharger et analyser'
                )}
              </button>
            </div>
          </div>
        )}
      </div>

      {status !== 'idle' && (
        <div
          className={`mt-6 p-4 rounded-lg flex items-start gap-3 ${
            status === 'success'
              ? 'bg-green-50 text-green-800 border border-green-200'
              : 'bg-red-50 text-red-800 border border-red-200'
          }`}
        >
          {status === 'success' ? (
            <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
          ) : (
            <XCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
          )}
          <p className="flex-1">{message}</p>
        </div>
      )}
    </div>
  )
}

