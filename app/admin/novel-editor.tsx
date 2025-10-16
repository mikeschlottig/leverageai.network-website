"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Bold, Italic, List, ListOrdered, Quote, Link as LinkIcon } from "lucide-react"

interface NovelEditorProps {
  initialContent?: string
  onChange?: (content: string) => void
  placeholder?: string
}

export default function NovelEditor({
  initialContent = "",
  onChange,
  placeholder = "Start writing..."
}: NovelEditorProps) {
  const [editorContent, setEditorContent] = useState(initialContent)
  const [isPreview, setIsPreview] = useState(false)

  const handleContentChange = (newContent: string) => {
    setEditorContent(newContent)
    onChange?.(newContent)
  }

  const insertMarkdown = (prefix: string, suffix: string = "") => {
    const textarea = document.querySelector('textarea') as HTMLTextAreaElement
    if (textarea) {
      const start = textarea.selectionStart
      const end = textarea.selectionEnd
      const selectedText = editorContent.substring(start, end)
      const newContent = editorContent.substring(0, start) + prefix + selectedText + suffix + editorContent.substring(end)
      handleContentChange(newContent)

      // Focus back to textarea
      setTimeout(() => {
        textarea.focus()
        textarea.setSelectionRange(start + prefix.length, start + prefix.length + selectedText.length)
      }, 0)
    }
  }

  const renderPreview = (markdown: string) => {
    return markdown
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.*?)\*/g, '<em>$1</em>')
      .replace(/`(.*?)`/g, '<code>$1</code>')
      .replace(/!\[([^\]]*)\]\(([^)]+)\)/g, '<img alt="$1" src="$2" class="max-w-full h-auto" />')
      .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-blue-600 hover:underline">$1</a>')
      .replace(/^> (.*$)/gm, '<blockquote class="border-l-4 border-gray-300 pl-4 italic">$1</blockquote>')
      .replace(/^- (.*$)/gm, '<li class="ml-4">• $1</li>')
      .replace(/^\d+\. (.*$)/gm, '<li class="ml-4">$1</li>')
      .replace(/\n\n/g, '</p><p>')
      .replace(/\n/g, '<br>')
  }

  return (
    <div className="border rounded-lg bg-white dark:bg-gray-900">
      {/* Toolbar */}
      <div className="border-b p-2 flex gap-1 flex-wrap">
        <Button
          type="button"
          variant="ghost"
          size="sm"
          onClick={() => insertMarkdown("**", "**")}
          title="Bold"
        >
          <Bold className="w-4 h-4" />
        </Button>
        <Button
          type="button"
          variant="ghost"
          size="sm"
          onClick={() => insertMarkdown("*", "*")}
          title="Italic"
        >
          <Italic className="w-4 h-4" />
        </Button>
        <Button
          type="button"
          variant="ghost"
          size="sm"
          onClick={() => insertMarkdown("- ")}
          title="Bullet List"
        >
          <List className="w-4 h-4" />
        </Button>
        <Button
          type="button"
          variant="ghost"
          size="sm"
          onClick={() => {
            const num = editorContent.split('\n').length
            insertMarkdown(`${num}. `)
          }}
          title="Numbered List"
        >
          <ListOrdered className="w-4 h-4" />
        </Button>
        <Button
          type="button"
          variant="ghost"
          size="sm"
          onClick={() => insertMarkdown("> ")}
          title="Quote"
        >
          <Quote className="w-4 h-4" />
        </Button>
        <Button
          type="button"
          variant="ghost"
          size="sm"
          onClick={() => {
            const url = prompt("Enter URL:")
            if (url) insertMarkdown("[", `](${url})`)
          }}
          title="Link"
        >
          <LinkIcon className="w-4 h-4" />
        </Button>
        <div className="ml-auto">
          <Button
            type="button"
            variant={isPreview ? "default" : "outline"}
            size="sm"
            onClick={() => setIsPreview(!isPreview)}
          >
            {isPreview ? "Edit" : "Preview"}
          </Button>
        </div>
      </div>

      {/* Editor */}
      <div className="p-4">
        {isPreview ? (
          <div
            className="min-h-96 prose prose-lg max-w-none
                       prose-headings:text-blue-900 dark:prose-headings:text-blue-100
                       prose-p:text-gray-700 dark:prose-p:text-gray-300
                       prose-strong:text-blue-900 dark:prose-strong:text-blue-100
                       prose-ul:text-gray-700 dark:prose-ul:text-gray-300
                       prose-ol:text-gray-700 dark:prose-ol:text-gray-300
                       prose-li:text-gray-700 dark:prose-li:text-gray-300
                       prose-a:text-blue-600 dark:prose-a:text-blue-400
                       prose-code:text-blue-600 dark:prose-code:text-blue-400
                       prose-blockquote:text-gray-600 dark:prose-blockquote:text-gray-400"
            dangerouslySetInnerHTML={{ __html: renderPreview(editorContent) }}
          />
        ) : (
          <textarea
            value={editorContent}
            onChange={(e) => handleContentChange(e.target.value)}
            placeholder={placeholder}
            className="w-full min-h-96 p-0 border-none outline-none resize-none bg-transparent
                       text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400"
            style={{ fontFamily: "inherit" }}
          />
        )}
      </div>
    </div>
  )
}