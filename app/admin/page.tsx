"use client"

import { useState } from "react"
import { PageLayout } from "@/components/page-layout"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Save, Plus, Edit, Trash2 } from "lucide-react"
import dynamic from "next/dynamic"

// Dynamically import the editor to avoid SSR issues
const NovelEditor = dynamic(() => import("./novel-editor"), {
  ssr: false,
  loading: () => (
    <div className="h-96 bg-gray-50 dark:bg-gray-800 rounded-lg animate-pulse flex items-center justify-center">
      <p className="text-gray-500 dark:text-gray-400">Loading editor...</p>
    </div>
  )
})

interface BlogPost {
  id: string
  title: string
  slug: string
  description: string
  content: string
  category: string
  published: boolean
  createdAt: string
}

// Blog post data with real content - in a real app, this would come from a CMS or API
const initialPosts: BlogPost[] = [
  {
    id: "1",
    title: "When Dashboards Lie: A Data Engineer's Confession",
    slug: "when-dashboards-lie",
    description: "How a property management CFO discovered their $100k monitoring system was watching the wrong signals—and what we rebuilt using 3D dependency mapping.",
    content: `<p>The property management firm's CFO showed me their dashboard at 2:47 PM on a Tuesday. Clean metrics. Green indicators. Everything supposedly humming along. "We're data-driven," she said, with the confidence of someone who'd invested six figures in the wrong solution.</p>

<p>I asked her to open Cloudflare Analytics. The real-time view told a different story—their client portal was hemorrhaging requests, failing silently while Grafana reported smooth sailing. The monitoring they'd paid for was watching the wrong signals.</p>

<p>This is the paradox of modern analytics: we're drowning in dashboards but starving for insight. I've seen it across industries now—Portland law firms billing by the hour but unable to forecast cash flow, health spas optimizing appointment schedules with spreadsheets, property managers tracking maintenance cycles in their heads because their "system" can't correlate the patterns.</p>

<p>The breakthrough came when we rebuilt their stack with 3D dependency mapping. Not metaphorical 3D—actual spatial visualization of how every data pipeline, API endpoint, and database query connects. When you can see bottlenecks in three dimensions, they stop being mysterious. That stalled report generation? A cascade failure originating from a misconfigured MCP server that was rate-limiting agent requests without logging errors.</p>

<p>We deployed Python-based predictive models using the Anaconda stack—not because it's trendy, but because reproducibility matters when you're forecasting tenant churn or legal case outcomes. The model runs on Supabase with real-time triggers. When a property shows early warning signals, the system alerts managers before turnover costs compound. For law firms, we're scoring case viability with 89% accuracy, letting partners focus on winnable work.</p>

<p>The CFO called last week. Their operations team now catches infrastructure issues before clients notice. Revenue predictability improved 34%. The cost? Less than what they were paying their previous vendor to produce those lying dashboards.</p>

<p>Data doesn't need to be complicated. It needs to be correct. And sometimes that means tearing down what you thought was working to see what's really broken underneath.</p>

<p><strong>Ready to map your dependencies?</strong> <a href="/blog" target="_blank">Explore our approach</a> at leverageai.network/blog or see how Oregon businesses across legal, property management, and wellness industries are leveraging <a href="/data-analytics" target="_blank">data analytics</a> to stay ahead.</p>`,
    category: "Data Analytics",
    published: true,
    createdAt: "2025-01-15T08:00:00-08:00"
  },
  {
    id: "2",
    title: "The $47,000 Voicemail: What One Missed Call Cost a Law Firm",
    slug: "missed-call-cost",
    description: "A Portland personal injury case lost to voicemail at 6:47 PM—and how AI phone systems are capturing revenue law firms didn't know they were losing.",
    content: `<p>The managing partner didn't know the exact moment they lost the client. It happened somewhere between the third ring and the voicemail beep at 6:47 PM on a Friday. A rear-end collision victim, still sitting in her Honda Civic with a sore neck and the other driver's insurance information in her hand, had Googled "personal injury attorney Portland Oregon" and started calling.</p>

<p>She called four firms. Three went to voicemail. One answered.</p>

<p>By Monday morning, when the Portland law firm checked their messages, the case was gone—signed with a competitor whose AI phone system had answered in eleven seconds, understood the caller's needs, booked a consultation for Saturday morning, and sent a confirmation text before the woman had even pulled out of the parking lot.</p>

<p>The case settled for $140,000. The firm's standard contingency would have been $47,000. Lost to a voicemail.</p>

<p>I've watched this pattern repeat across industries. A Eugene med spa loses a Botox client because their receptionist is mid-procedure and can't answer. A Bend property management company misses an emergency maintenance call at 11 PM—tenant moves out angry, leaves a one-star review. A restaurant in downtown Portland watches Saturday night reservations fill up at competitors while their phone rings unanswered during Friday lunch rush.</p>

<p>The paradox: these businesses all had communication systems. Phones. Websites. Email. What they lacked was intelligence—the ability to understand intent, maintain context, and route appropriately without human intervention.</p>

<p>We deployed an NLP-powered communication layer for that law firm. Not a simple chatbot that matches keywords, but a system that understands the difference between "I was in a car accident" and "I'm researching car accident statistics for a paper." It qualifies leads in real-time, books consultations, integrates with their case management system, and escalates appropriately when a human attorney is actually needed.</p>

<p>Their intake rate improved 64% in ninety days. More importantly, the paralegal who used to spend four hours daily returning missed calls now focuses on case prep. The junior associate stopped fielding "What are your hours?" calls and started billing more hours to clients.</p>

<p>The system doesn't sleep. Doesn't take lunch breaks. Doesn't get flustered when three calls come in simultaneously during the 5 PM rush. It answers, understands, and acts—24/7, across phone, website chat, and SMS.</p>

<p>That managing partner called last week. They'd just signed a six-figure case that came in at 2 AM on a Sunday. The client's first message: "Finally, someone who answers."</p>

<p><strong>Calculate your missed opportunity cost.</strong> Read our complete analysis at <a href="/blog" target="_blank">leverageai.network/blog</a> or see how Oregon businesses across <a href="/industries" target="_blank">legal</a>, <a href="/data-analytics" target="_blank">property management</a>, wellness, and hospitality are capturing revenue they didn't know they were losing.</p>`,
    category: "AI Communications",
    published: true,
    createdAt: "2025-01-15T09:00:00-08:00"
  },
  {
    id: "3",
    title: "The Three-Month Ghost: When Sales Pipeline Becomes Sales Theater",
    slug: "sales-pipeline-ghost",
    description: "How a sales director's $3.2M pipeline was 67% dead deals—and how AI lead scoring transformed ghost opportunities into a 34% close rate.",
    content: `<p>The sales director showed me their CRM at 4:15 PM on a Thursday. 147 opportunities. $3.2 million in projected revenue. The board presentation looked impressive. The reality was catastrophic.</p>

<p>I asked him to filter for deals older than 90 days. Forty-three opportunities. He'd been nursing them like seedlings, convinced that persistence would convert skepticism into contracts. His best rep had spent twelve weeks courting a commercial real estate firm in Bend—seventeen calls, four demos, two proposals. The prospect kept saying "maybe next quarter."</p>

<p>The deal was never going to close. The behavioral signals had been screaming "no" since week two: sporadic email engagement, calls rescheduled three times, demo attendance by junior staff only, no budget questions. But without a system to interpret these patterns, the rep saw hope where there was only politeness.</p>

<p>That quarter, they missed their number by 41%. The rep quit two months later, burned out from chasing ghosts.</p>

<p>I've watched this pattern destroy professional services firms, property management companies, and law practices across Oregon. Sales teams drowning in leads but starving for qualified opportunities. Marketing generating volume but not value. The cost isn't just lost time—it's the deals you could have closed if your best people weren't trapped in dead-end conversations.</p>

<p>We deployed a lead scoring model that analyzes 47 behavioral data points in real-time. Email engagement velocity. Website session depth. Response time patterns. Org chart positioning of engaged contacts. Budget authority signals. The model doesn't guess—it calculates probability based on thousands of closed deals across industries.</p>

<p>Within thirty days, that sales director's pipeline transformed. The model flagged 28 of those 43 aging deals as sub-15% probability. He killed them. Reassigned his team to the 19 opportunities scoring above 65%. They closed seven deals in the next sixty days—$890,000 in new revenue from leads that had been languishing at the bottom of the funnel.</p>

<p>The system runs continuously now, scoring every new lead within minutes of first contact. Automated campaign triggers respond to behavioral signals—a prospect who downloads three case studies gets a different nurture sequence than one who only visits the pricing page. The model predicts churn risk for existing clients, surfacing renewal opportunities before competitors start circling.</p>

<p>The sales director called last week. His team's close rate improved from 18% to 34%. More importantly, his best rep isn't burning out on ghost deals anymore. She's closing.</p>

<p><strong>Stop prospecting. Start closing.</strong> Explore our predictive AI systems at <a href="/blog" target="_blank">leverageai.network/blog</a> or see how Oregon businesses across <a href="/industries" target="_blank">professional services</a>, <a href="/data-analytics" target="_blank">real estate</a>, and legal industries are converting pipeline theater into revenue.</p>`,
    category: "Sales & Marketing",
    published: true,
    createdAt: "2025-01-15T10:00:00-08:00"
  }
]

export default function AdminPage() {
  const [posts, setPosts] = useState<BlogPost[]>(initialPosts)
  const [editingPost, setEditingPost] = useState<BlogPost | null>(null)
  const [isCreating, setIsCreating] = useState(false)
  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    description: "",
    content: "",
    category: "General"
  })

  const categories = ["General", "Data Analytics", "AI Communications", "Sales & Marketing", "Infrastructure"]

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^\w\s-]/g, "")
      .replace(/\s+/g, "-")
      .trim()
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value,
      ...(field === "title" && !prev.slug ? { slug: generateSlug(value) } : {})
    }))
  }

  const handleSave = () => {
    if (!formData.title || !formData.slug || !formData.description) {
      alert("Please fill in all required fields")
      return
    }

    if (editingPost) {
      // Update existing post
      setPosts(prev => prev.map(post =>
        post.id === editingPost.id
          ? { ...post, ...formData, content: formData.content || post.content }
          : post
      ))
      setEditingPost(null)
    } else {
      // Create new post
      const newPost: BlogPost = {
        id: Date.now().toString(),
        ...formData,
        published: false,
        createdAt: new Date().toISOString()
      }
      setPosts(prev => [...prev, newPost])
      setIsCreating(false)
    }

    // Reset form
    setFormData({
      title: "",
      slug: "",
      description: "",
      content: "",
      category: "General"
    })
  }

  const handleEdit = (post: BlogPost) => {
    setEditingPost(post)
    setFormData({
      title: post.title,
      slug: post.slug,
      description: post.description,
      content: post.content,
      category: post.category
    })
    setIsCreating(false)
  }

  const handleDelete = (postId: string) => {
    if (confirm("Are you sure you want to delete this post?")) {
      setPosts(prev => prev.filter(post => post.id !== postId))
    }
  }

  const togglePublish = (postId: string) => {
    setPosts(prev => prev.map(post =>
      post.id === postId ? { ...post, published: !post.published } : post
    ))
  }

  return (
    <PageLayout currentPage="Admin">
      <main className="py-20">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-4xl font-black text-blue-900 dark:text-blue-100">
                Blog Admin
              </h1>
              <p className="text-gray-600 dark:text-gray-400 mt-2">
                Create and manage blog content
              </p>
            </div>
            <Button
              onClick={() => {
                setIsCreating(true)
                setEditingPost(null)
                setFormData({
                  title: "",
                  slug: "",
                  description: "",
                  content: "",
                  category: "General"
                })
              }}
              className="bg-blue-600 hover:bg-blue-700"
            >
              <Plus className="w-4 h-4 mr-2" />
              New Post
            </Button>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Posts List */}
            <div className="lg:col-span-1">
              <Card>
                <CardHeader>
                  <CardTitle>Blog Posts ({posts.length})</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {posts.map((post) => (
                    <div key={post.id} className="border rounded-lg p-4">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="font-semibold text-sm">{post.title}</h3>
                        <Badge variant={post.published ? "default" : "secondary"}>
                          {post.published ? "Published" : "Draft"}
                        </Badge>
                      </div>
                      <p className="text-xs text-gray-600 dark:text-gray-400 mb-3 line-clamp-2">
                        {post.description}
                      </p>
                      <div className="flex gap-2">
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => handleEdit(post)}
                        >
                          <Edit className="w-3 h-3" />
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => togglePublish(post.id)}
                        >
                          {post.published ? "Unpublish" : "Publish"}
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => handleDelete(post.id)}
                        >
                          <Trash2 className="w-3 h-3" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>

            {/* Editor */}
            <div className="lg:col-span-2">
              {(isCreating || editingPost) && (
                <Card>
                  <CardHeader>
                    <CardTitle>
                      {editingPost ? "Edit Post" : "Create New Post"}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* Basic Info */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="title">Title *</Label>
                        <Input
                          id="title"
                          value={formData.title}
                          onChange={(e) => handleInputChange("title", e.target.value)}
                          placeholder="Enter post title"
                        />
                      </div>
                      <div>
                        <Label htmlFor="slug">Slug *</Label>
                        <Input
                          id="slug"
                          value={formData.slug}
                          onChange={(e) => handleInputChange("slug", e.target.value)}
                          placeholder="post-url-slug"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="category">Category</Label>
                        <select
                          id="category"
                          value={formData.category}
                          onChange={(e) => handleInputChange("category", e.target.value)}
                          className="w-full p-2 border rounded-md bg-white dark:bg-gray-800"
                        >
                          {categories.map((cat) => (
                            <option key={cat} value={cat}>{cat}</option>
                          ))}
                        </select>
                      </div>
                      <div className="flex items-end">
                        <Button onClick={handleSave} className="w-full">
                          <Save className="w-4 h-4 mr-2" />
                          {editingPost ? "Update" : "Save"} Post
                        </Button>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="description">Description *</Label>
                      <Textarea
                        id="description"
                        value={formData.description}
                        onChange={(e) => handleInputChange("description", e.target.value)}
                        placeholder="Brief description of the post"
                        rows={3}
                      />
                    </div>

                    {/* Rich Text Editor */}
                    <div>
                      <Label>Content</Label>
                      <div className="mt-2">
                        <NovelEditor
                          initialContent={formData.content}
                          onChange={(content: string) => handleInputChange("content", content)}
                        />
                      </div>
                    </div>

                    <div className="flex gap-2 pt-4">
                      <Button variant="outline" onClick={() => {
                        setIsCreating(false)
                        setEditingPost(null)
                      }}>
                        Cancel
                      </Button>
                      <Button onClick={handleSave}>
                        <Save className="w-4 h-4 mr-2" />
                        {editingPost ? "Update" : "Save"} Post
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </main>
    </PageLayout>
  )
}